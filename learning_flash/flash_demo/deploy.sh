#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Backend deployment
echo "Starting backend (Flask) server..."
cd backend
# Install Python dependencies if requirements.txt exists
if [ -f requirements.txt ]; then
    pip install -r requirements.txt
fi
# Start Flask backend in the background
FLASK_APP=app.py nohup flask run --host=0.0.0.0 --port=5000 > backend.log 2>&1 &

# Save backend PID
BACKEND_PID=$!
echo "Backend started with PID $BACKEND_PID"

cd ..

# Frontend deployment
echo "Starting frontend (static HTML/JS)..."
cd frontend

# If you want to use Python's built-in HTTP server to serve static files:
nohup python3 -m http.server 8000 > frontend.log 2>&1 &

# Save frontend PID
FRONTEND_PID=$!
echo "Frontend started with PID $FRONTEND_PID"

cd ..

echo "Deployment complete!"
echo "Backend running at: http://127.0.0.1:5000"
echo "Frontend running at: http://127.0.0.1:8000"