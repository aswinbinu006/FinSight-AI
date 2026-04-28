# ── FinSight AI Production Backend ──
# Build: docker build -t finsight-ai .
# Run:   docker run -p 8000:8000 --env-file .env finsight-ai

FROM python:3.11-slim

# Allow statements and log messages to immediately appear in logs
ENV PYTHONUNBUFFERED=True
ENV PORT=8000
ENV ENVIRONMENT=production

# Set working directory
ENV APP_HOME=/app
WORKDIR $APP_HOME

# Install production dependencies first (Docker layer caching)
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend source code only
COPY src/ ./src/

# Ensure Python can find the models package
ENV PYTHONPATH="${APP_HOME}/src:${PYTHONPATH}"

# Run the web service using Uvicorn
CMD exec uvicorn src.main:app --host 0.0.0.0 --port ${PORT}
