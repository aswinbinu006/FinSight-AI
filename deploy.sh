#!/bin/bash

# FinSight AI Deployment Script
# This script builds and deploys both frontend and backend

set -e  # Exit on error

echo "🚀 FinSight AI Deployment Script"
echo "================================="

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${RED}❌ Error: .env file not found${NC}"
    echo "Please create .env file with required variables"
    exit 1
fi

echo -e "\n${YELLOW}📦 Installing dependencies...${NC}"
npm install

echo -e "\n${YELLOW}🔨 Building frontend...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Frontend build successful${NC}"
else
    echo -e "${RED}❌ Frontend build failed${NC}"
    exit 1
fi

echo -e "\n${YELLOW}🔍 Checking backend health...${NC}"
BACKEND_URL="${VITE_API_URL:-https://finsight-ai-backend-bkbm.onrender.com}"
HEALTH_CHECK=$(curl -s -o /dev/null -w "%{http_code}" "$BACKEND_URL/health" || echo "000")

if [ "$HEALTH_CHECK" = "200" ]; then
    echo -e "${GREEN}✅ Backend is healthy${NC}"
else
    echo -e "${YELLOW}⚠️  Backend health check failed (HTTP $HEALTH_CHECK)${NC}"
    echo "Continuing with deployment..."
fi

echo -e "\n${YELLOW}🚀 Deploying to Firebase...${NC}"
firebase deploy --only hosting

if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✅ Deployment successful!${NC}"
    echo -e "\n📱 Your app is live at:"
    echo -e "   https://finsight-ai-app.web.app"
    echo -e "   https://finsight-ai-app.firebaseapp.com"
else
    echo -e "\n${RED}❌ Deployment failed${NC}"
    exit 1
fi

echo -e "\n${YELLOW}🧪 Running post-deployment checks...${NC}"

# Check if frontend is accessible
FRONTEND_CHECK=$(curl -s -o /dev/null -w "%{http_code}" "https://finsight-ai-app.web.app" || echo "000")
if [ "$FRONTEND_CHECK" = "200" ]; then
    echo -e "${GREEN}✅ Frontend is accessible${NC}"
else
    echo -e "${RED}❌ Frontend check failed (HTTP $FRONTEND_CHECK)${NC}"
fi

echo -e "\n${GREEN}🎉 Deployment complete!${NC}"
