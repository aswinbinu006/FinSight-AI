# FinSight AI

AI-powered financial intelligence platform with ML-based health scoring, waste detection, and goal prediction.

---

## 🚀 Quick Start

### 1. Start Backend

**Windows:**
```bash
RUN_ME.bat
```

**Linux/Mac:**
```bash
chmod +x RUN_ME.sh
./RUN_ME.sh
```

### 2. Start Frontend

Open a new terminal:
```bash
npm install
npm run dev
```

### 3. Access Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs

---

## 📁 Project Structure

```
FinSight AI/
├── main.py                          # FastAPI backend server
├── security.py                      # Authentication & JWT
├── finsight_models_production/      # ML models
│   ├── health_model.py              # Financial health scoring
│   ├── waste_model.py               # Subscription waste detection
│   ├── goal_model.py                # Goal achievement prediction
│   ├── cluster_model.py             # Behavioral clustering
│   ├── behavioral_scoring.py        # Behavioral analysis
│   ├── explainer.py                 # AI explanations (Gemini)
│   └── data/                        # Training datasets
├── src/                             # React frontend
│   ├── pages/                       # 32 page components
│   ├── components/                  # Reusable components
│   ├── api.js                       # API client
│   └── App.jsx                      # Main app & routing
├── requirements.txt                 # Python dependencies
├── package.json                     # Node.js dependencies
├── RUN_ME.bat / RUN_ME.sh          # One-click startup
└── test_everything.py               # System tests
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file (optional):
```env
JWT_SECRET=your_secret_key_here
GEMINI_API_KEY=your_gemini_api_key_here
```

Get Gemini API key: https://makersuite.google.com/app/apikey

---

## 🧪 Testing

Run comprehensive tests:
```bash
python test_everything.py
```

---

## 🔧 Manual Setup

If you prefer manual setup:

### Backend
```bash
# Create virtual environment
python -m venv .venv

# Activate
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Start server
python main.py
```

### Frontend
```bash
npm install
npm run dev
```

---

## 📊 Features

- ✅ User Authentication (JWT)
- ✅ Financial Health Scoring
- ✅ Subscription Waste Analysis
- ✅ Goal Achievement Prediction
- ✅ Behavioral Clustering
- ✅ AI-Powered Explanations
- ✅ Interactive Dashboard
- ✅ 32 Responsive Pages

---

## 🛠️ Tech Stack

**Backend:**
- FastAPI
- SQLite
- XGBoost
- scikit-learn
- Pandas
- Google Gemini AI

**Frontend:**
- React 19
- Vite
- TailwindCSS
- Framer Motion
- React Router

---

## 🆘 Troubleshooting

### Port Already in Use
Edit `main.py` line 233:
```python
uvicorn.run(app, host="0.0.0.0", port=8001)  # Change port
```

### Module Not Found
```bash
# Activate virtual environment
.venv\Scripts\activate  # Windows
source .venv/bin/activate  # Linux/Mac

# Reinstall dependencies
pip install -r requirements.txt
```

### Database Issues
Delete `finsight.db` and restart - it will be recreated automatically.

---

## 📝 API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `GET /user/me` - Get current user

### Predictions (Authenticated)
- `POST /predict/health` - Financial health score
- `POST /predict/waste` - Subscription waste analysis
- `POST /predict/goal` - Goal achievement prediction

---

## 🚀 Production Deployment

### Backend
```bash
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Frontend
```bash
npm run build
# Deploy dist/ folder to your hosting
```

### Environment
Update `.env` with production values:
```env
JWT_SECRET=strong_random_secret_here
GEMINI_API_KEY=production_api_key
```

---

## 📄 License

Private Project

---

## 🎯 Getting Started

**Simplest way:**
1. Run `RUN_ME.bat` (Windows) or `./RUN_ME.sh` (Linux/Mac)
2. Open new terminal and run `npm run dev`
3. Visit http://localhost:5173

**That's it!** 🎉


An advanced, data-driven financial intelligence platform leveraging Machine Learning to provide predictive analytics, behavioral clustering, and personalized financial modeling. 

FinSight AI replaces static heuristic engines with robust AI classification and regression models, wrapped in a high-performance React frontend. It is designed to act as an institutional-grade advisory tool for tracking financial health, minimizing resource wastage, and mapping long-term wealth goals.

---

## 📑 Table of Contents
1. [System Architecture](#system-architecture)
2. [Machine Learning Models](#machine-learning-models)
3. [Frontend Interface](#frontend-interface)
4. [Installation & Local Setup](#installation--local-setup)
5. [Evaluation Metrics](#evaluation-metrics)

---

## 🏗️ System Architecture

The platform operates on a decoupled client-server architecture:

- **Frontend Interface:** Built with React.js and Vite, implementing a responsive, split-screen layouts and GSAP for fluid timeline animations.
- **Backend Model API:** A Python-based computing environment that executes serialized scikit-learn pipelines.
- **Data Persistence:** SQLite (`finsight.db`) acts as the localized datastore for user accounts, credentials, and cached model states.

---

## 🧠 Machine Learning Models

The core intelligence of FinSight AI resides in the `finsight_models_production` directory. All models utilize categorical encoding (`OneHotEncoder`) and strict input pipelines to prevent runtime crashes.

1. **Financial Health Model (`health_model.py`)**  
   Evaluates comprehensive user inputs against trained financial viability datasets to compute a dynamic health score, predicting bankruptcy risk and stability.
   
2. **Wastage Analytics (`waste_model.py`)**  
   A precision decision-engine that processes user subscription data through a unified usage ratio, delivering a definitive "Presence of Mind" score regarding financial attrition.

3. **Goal Intelligence Model (`goal_model.py`)**  
   Projects long-term savings scenarios using multi-variable regression, aligning raw financial metrics with actionable, timed milestones.

4. **Behavioral Clustering (`cluster_model.py`)**  
   Categorizes users into defined financial personas via Unsupervised Learning, tailoring frontend recommendations dynamically.

---

## 💻 Frontend Interface

- **State Management:** Functional React hooks and API integration for real-time model querying.
- **Styling Methodology:** Centralized CSS Architecture with "Mirror Glass" design tokens ensuring high accessibility and cognitive ease.
- **Robustness protocols:** Graceful error handling prevents exceptions from the Python backend from halting the interface, utilizing fallbacks and network error boundaries.

---

## ⚙️ Installation & Local Setup

### Prerequisites
- Node.js (v18.0.0 or higher)
- Python 3.10+
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/aswinbinu006/FinSight-AI.git
cd FinSight-AI
```

### 2. Frontend Initialization
```bash
npm install
npm run dev
```
*The web interface will typically be available at `http://localhost:5173`.*

### 3. Backend Generation
Open a secondary terminal in the project root:
```bash
# Create and activate a Virtual Environment
python -m venv .venv

# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate

# Install required numerical libraries
pip install scikit-learn pandas numpy

# Initialize the Model Endpoints
python main.py
```

---

## 📊 Evaluation Metrics

Ensuring output reliability ("Viva-Ready"):
- Continuous validation using **Root Mean Square Error (RMSE)** and **R-Squared (R²)** for regression matrices.
- Precision/Recall tracking for the classification and clustering tasks.
- Defense-in-depth protocols are actively maintained to catch `KeyboardInterrupt` and arbitrary `NoneType` transmissions.

---
*FinSight AI is maintained as a proprietary academic/startup initiative.*
