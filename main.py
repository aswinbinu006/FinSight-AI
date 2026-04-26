import os
import sys
import logging
import sqlite3
import json
from fastapi import FastAPI, HTTPException, Depends, status, BackgroundTasks
from pydantic import BaseModel
from typing import Dict, List, Optional
from dotenv import load_dotenv
from fastapi.security import OAuth2PasswordRequestForm

# Auth utilities
from security import Token, get_password_hash, verify_password, create_access_token, get_current_user

# Add model directory to path
sys.path.append(os.path.join(os.getcwd(), 'finsight_models_production'))

from health_model import HealthModel
from waste_model import WasteModel
from goal_model import GoalModel
from explainer import explain_health, explain_waste, explain_goal

# Load env variables (for Gemini API Key)
load_dotenv()

# --- DATABASE SETUP ---
def init_db():
    conn = sqlite3.connect('finsight.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users 
                 (username TEXT PRIMARY KEY, password TEXT, full_name TEXT)''')
    c.execute('''CREATE TABLE IF NOT EXISTS user_data 
                 (username TEXT PRIMARY KEY, health_score REAL, waste_data TEXT, goal_data TEXT)''')
    conn.commit()
    conn.close()

init_db()

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="FinSight AI Prediction Engine")

# Initialize Models
health_predictor = HealthModel()
waste_predictor = WasteModel()
goal_predictor = GoalModel()

# Pre-train models on startup
@app.on_event("startup")
async def startup_event():
    logger.info("Training models on startup...")
    try:
        h_metrics = health_predictor.train()
        w_metrics = waste_predictor.train()
        g_metrics = goal_predictor.train()
        logger.info(f"Models trained successfully.")
    except Exception as e:
        logger.error(f"Error during model training: {e}")

# --- SCHEMAS ---

class UserSignup(BaseModel):
    username: str
    password: str
    full_name: str

class HealthRequest(BaseModel):
    behavioral_scores: dict
    emi_burden: str = "light"
    income_bracket: str = "50k-100k"

class WasteRequest(BaseModel):
    subscriptions: List[dict] # List of {name, price, frequency, category, last_accessed_days}

class GoalRequest(BaseModel):
    goal_description: str
    target_amount: float
    saved_so_far: float
    monthly_savings: float
    timeline_months: int
    behavioral_scores: dict

# --- EMAIL SIMULATOR ---
def send_welcome_email(email: str, name: str):
    first_name = name.split()[0] if name else "User"
    email_template = f"""
\n    ===========================================================================
    ✉️  NEW INCOMING EMAIL
    ===========================================================================
    To:        {email}
    Date:      Just now
    From:      FinSight Security <no-reply@finsight.ai>
    Subject:   Welcome to FinSight AI, {first_name}
    
    Dear {name},

    Your institutional account has been successfully provisioned on the 
    FinSight AI network. Your identity has been verified, and your 
    encrypted workspace is now active.

    You can now access your Editorial Intelligence Dashboard to begin 
    generating behavioral wealth forecasts, managing algorithmic goals, 
    and auditing subscription leakage.

    System Configuration:
    - Status: Active
    - Auth Profile: Standard
    - Region: Global

    Return to your dashboard to review your initial telemetry data.

    If you did not authorize this provisioning, please contact our 
    threat response team immediately at security@finsight.ai.

    Best regards,
    The FinSight Security Engineering Team
    ===========================================================================\n
    """
    print(email_template, flush=True)

# --- AUTH ENDPOINTS ---

@app.post("/auth/signup")
async def signup(user: UserSignup, background_tasks: BackgroundTasks):
    conn = sqlite3.connect('finsight.db')
    c = conn.cursor()
    try:
        hashed_password = get_password_hash(user.password)
        c.execute("INSERT INTO users VALUES (?, ?, ?)", (user.username, hashed_password, user.full_name))
        conn.commit()
        
        # Dispatch background email
        background_tasks.add_task(send_welcome_email, user.username, user.full_name)
        
        return {"msg": "User created successfully"}
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Username already exists")
    finally:
        conn.close()

@app.post("/auth/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    conn = sqlite3.connect('finsight.db')
    c = conn.cursor()
    c.execute("SELECT password FROM users WHERE username = ?", (form_data.username,))
    row = c.fetchone()
    conn.close()
    
    if not row or not verify_password(form_data.password, row[0]):
        raise HTTPException(status_code=400, detail="Incorrect username or password")
    
    access_token = create_access_token(data={"sub": form_data.username})
    return {"access_token": access_token, "token_type": "bearer"}

@app.get("/user/me")
async def get_me(username: str = Depends(get_current_user)):
    return {"username": username}

# --- PREDICTION ENDPOINTS ---

@app.get("/health")
def read_root():
    return {"status": "online", "engine": "FinSight AI v2"}

@app.post("/predict/health")
async def predict_health(req: HealthRequest, username: str = Depends(get_current_user)):
    try:
        result = health_predictor.predict(req.behavioral_scores, req.emi_burden, req.income_bracket)
        explanation = explain_health(result)
        result['explanation'] = explanation
        return result
    except Exception as e:
        logger.error(f"Health Prediction Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict/waste")
async def predict_waste(req: WasteRequest, username: str = Depends(get_current_user)):
    try:
        result = waste_predictor.predict_bulk(req.subscriptions)
        explanation = explain_waste(result)
        result['explanation'] = explanation
        return result
    except Exception as e:
        logger.error(f"Waste Prediction Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict/goal")
async def predict_goal(req: GoalRequest, username: str = Depends(get_current_user)):
    try:
        result = goal_predictor.predict(
            req.goal_description, req.target_amount, req.saved_so_far,
            req.monthly_savings, req.timeline_months, req.behavioral_scores
        )
        explanation = explain_goal(result)
        result['explanation'] = explanation
        return result
    except Exception as e:
        logger.error(f"Goal Prediction Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
