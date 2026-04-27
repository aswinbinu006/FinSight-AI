# FinSight AI: Production Deployment Guide

Deploying FinSight AI requires a split-architecture strategy: the React frontend should go to **Firebase Hosting**, and the heavy FastAPI Machine Learning models should go to a containerized platform like **Google Cloud Run** or **Render**.

---

## Part 1: Deploying the Backend (ML Models + FastAPI)

Because your backend runs complex Python dependencies (`xgboost`, `scikit-learn`, `fastapi`), the best approach is to run it as a serverless container. I have just added a **`Dockerfile`** to your project to make this seamless.

### Option A: Render.com (Highly Recommended & Easiest)
1. Push your entire repository to GitHub.
2. Go to [Render](https://render.com) and create a new **Web Service**.
3. Connect your GitHub repository.
4. Render will automatically detect the `Dockerfile`.
5. Under Environment Variables on Render, set:
   - `DATABASE_URL` (Set this to a Postgres database URI, Render provides these for free)
   - `LOGIN_REQUIRED` etc.
6. Click **Deploy**. Render will build the container and provide you with a live URL (e.g., `https://finsight-api.onrender.com`).

### Option B: Google Cloud Run (More Scalable)
If you want to keep everything in the Google ecosystem:
1. Install the Google Cloud CLI (`gcloud`).
2. Run the deployment command from your project root:
   ```bash
   gcloud run deploy finsight-ai-backend --source . --port 8000 --allow-unauthenticated
   ```
3. Copy the URL it provides deployed (e.g., `https://finsight-api-xxxxx.run.app`).

---

## Part 2: Connecting the Frontend to the New Backend

Before you deploy the frontend, you must tell it where the backend lives on the internet (instead of `localhost`).

1. Open (or create) the `.env` file in the root of your project:
   ```env
   VITE_API_URL=https://<YOUR_NEW_BACKEND_URL_FROM_ABOVE>
   ```

2. Generate the production build of your frontend:
   ```bash
   npm run build
   ```
   *This compiles everything efficiently into the `dist/` folder.*

---

## Part 3: Deploying the Frontend (React + Firebase)

You already have `firebase.json` properly configured to deploy the built `dist/` folder!

1. Change your terminal into the secure Firebase folder:
   ```bash
   cd firebase_env
   ```
2. Log into Firebase if you haven't recently:
   ```bash
   firebase login
   ```
3. Deploy to the world:
   ```bash
   firebase deploy --only hosting
   ```

**Boom!** Firebase will give you a live URL (like `<project>.web.app`), and your application is officially live, secure, and running production machine learning models!
