# FinSight AI

Institutional-grade financial intelligence platform powered by AI.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- Firebase CLI (`npm install -g firebase-tools`)
- Git

### Local Development

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd finsight-ai
   npm install
   pip install -r requirements.txt
   ```

2. **Environment Setup**
   
   Create `.env` file in root:
   ```env
   # Backend API
   VITE_API_URL=http://localhost:8000
   
   # Firebase Config
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   
   # Backend Secrets
   GEMINI_API_KEY=your_gemini_key
   JWT_SECRET=your_jwt_secret
   ```

3. **Run Backend**
   ```bash
   python src/main.py
   # Backend runs on http://localhost:8000
   ```

4. **Run Frontend**
   ```bash
   npm run dev
   # Frontend runs on http://localhost:5173
   ```

## 📦 Deployment

### Automated Deployment
```bash
chmod +x deploy.sh
./deploy.sh
```

### Manual Deployment

**Frontend (Firebase Hosting)**
```bash
npm run build
firebase deploy --only hosting
```

**Backend (Render.com)**
- Push to GitHub
- Render auto-deploys from main branch
- Set environment variables in Render dashboard

## 🔧 Architecture

- **Frontend**: React + Vite + TailwindCSS + Firebase
- **Backend**: FastAPI + Python + XGBoost + Gemini AI
- **Database**: Firebase Firestore (user data) + SQLite (ML models)
- **Hosting**: Firebase Hosting (frontend) + Render.com (backend)

## 🛠️ Key Features

- ✅ Behavioral financial profiling (10-question assessment)
- ✅ Health score prediction using ML
- ✅ Subscription waste analysis
- ✅ Goal success probability modeling
- ✅ Real-time Firebase sync
- ✅ Offline fallback scoring
- ✅ Error boundaries and retry logic
- ✅ Network status monitoring

## 📚 Documentation

- [Deployment Fix Guide](./DEPLOYMENT_FIX_GUIDE.md) - Troubleshooting and fixes
- [API Documentation](./docs/DEPLOYMENT_GUIDE.md) - Backend API reference

## 🐛 Troubleshooting

### Frontend Issues
- **White screen after login**: Check browser console, verify Firebase config
- **API errors**: Check if backend is running at `/health` endpoint
- **Build errors**: Clear `node_modules` and reinstall

### Backend Issues
- **500 errors**: Check Render logs, verify environment variables
- **CORS errors**: Ensure frontend URL is in allowed origins
- **Model training**: Wait 2-3 minutes on first startup

## 📝 Environment Variables

### Frontend (.env)
- `VITE_API_URL` - Backend API URL
- `VITE_FIREBASE_*` - Firebase configuration

### Backend (Render.com)
- `GEMINI_API_KEY` - Google Gemini API key
- `JWT_SECRET` - JWT signing secret
- `PORT` - Server port (default: 8000)
- `LOG_LEVEL` - Logging level (default: INFO)

## 🔐 Security

- Firebase Authentication for user management
- JWT tokens for backend API authentication
- CORS configured for specific origins
- Environment variables for sensitive data

## 📊 Tech Stack

**Frontend**
- React 19
- Vite 8
- TailwindCSS 4
- Firebase SDK
- GSAP + Framer Motion
- React Router

**Backend**
- FastAPI
- XGBoost
- Scikit-learn
- Google Gemini AI
- PostgreSQL/SQLite

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

Proprietary - All rights reserved

## 🆘 Support

For issues and questions:
1. Check [DEPLOYMENT_FIX_GUIDE.md](./DEPLOYMENT_FIX_GUIDE.md)
2. Review browser console and backend logs
3. Verify environment variables
4. Check Firebase and Render dashboards

---

Built with ❤️ by the FinSight AI Team
