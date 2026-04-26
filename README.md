# FinSight AI

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
