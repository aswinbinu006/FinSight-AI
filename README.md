# 🏛️ FinSight AI - Editorial Financial Intelligence

![FinSight AI Banner](src/assets/hero.png)

FinSight AI is a premium, institutional-grade financial intelligence platform. Designed to rival top-tier applications like Revolut, it serves as a cohesive ecosystem that transitions users from static heuristic financial tracking to **Dynamic, Data-Driven Wealth Intelligence**. 

Featuring a modern "Mirror Glass" visual identity, tailored micro-interactions (powered by GSAP), and a resilient Python AI modeling backend, FinSight offers users clear, explainable insights into their financial health, wastage, and goals.

---

## ✨ Core Pillars & Features

### 1. The Interactive Frontend (React + Vite)
- **Premium Aesthetics**: Built upon a "Mirror Glass" design system with deep, monochromatic themes ensuring a distraction-free, editorial user experience.
- **Snappy Micro-animations**: Integrated with GSAP for buttery smooth physics, tactile feedback, and intuitive "flick-to-slide" manual page scrollers.
- **Split-Screen Authentication**: A bespoke 65/35 split-screen login/signup architecture paired with a background email simulator to welcome new users intuitively.
- **Comprehensive Modules**: Features fully responsive pages for Dashboard, Goal Tracking, Financial Health, AI Copilot, Subscription Management, and Wastage analytics.

### 2. The Analytical Backend (Python AI Engine)
Located in `finsight_models_production/`, the backend discards heuristics in favor of robust, mathematically validated machine learning models:
- **Financial Health Model**: Evaluates user financial viability with rigorous evaluation metrics (RMSE, R², Accuracy).
- **Wastage Analytics**: A precision six-feature reasoning engine that processes subscription data via a unified usage ratio to generate a "Presence of Mind" financial impact report.
- **Goal Intelligence Model**: Translates raw metrics into explainable, scenario-based milestones to improve long-term user wealth accumulation.
- **Behavioral Clustering Engine**: Uses precise categorical encoding (`OneHotEncoder`) to profile users into discrete financial personas, tailoring UI/UX recommendations automatically.

---

## 🛠️ Tech Stack Architecture

**Frontend Ecosystem**
- **Framework:** React.js 18 + Vite
- **Styling:** Vanilla CSS3 + Premium Glassmorphism tokens
- **Animations:** GSAP (GreenSock Animation Platform)

**Backend Intelligence**
- **Language:** Python
- **API Runtime:** FastAPI / Flask (via `main.py`)
- **Data Engineering:** scikit-learn, Pandas, Numpy
- **Database:** SQLite (`finsight.db`)

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v18+)
- [Python 3.10+](https://www.python.org/)
- `pip` or preferably a Python virtual environment manager (e.g., `venv`)

### 1. Frontend Setup
1. Open your terminal in the root directory.
2. Install the Node modules:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

### 2. Python AI Model Setup
1. Activate a Python virtual environment (recommended):
   ```bash
   python -m venv .venv
   # Windows:
   .venv\Scripts\activate
   # macOS/Linux:
   source .venv/bin/activate
   ```
2. Install backend dependencies (see `requirements.txt` if available):
   ```bash
   pip install scikit-learn pandas numpy
   ```
3. Boot the backend server/API model endpoints:
   ```bash
   python main.py
   ```

---

## 🧪 Testing & Hardening ("Viva-Ready")
FinSight AI models have strict input validation implementations and rigorous exception handling protocols (graceful degradation against KeyboardInterrupts). The backend never exposes internal tracebacks to the user, ensuring the suite is secure, robust, and production-ready for high-stakes evaluations.

---

## 📝 License & Authors
Maintained by **Aswin Binu** & the FinSight Development Team.
