#!/bin/bash

# Stop Flask backend
echo "Stopping backend (Flask) server..."
BACKEND_PID=$(lsof -ti:5000)
if [ -n "$BACKEND_PID" ]; then
    kill $BACKEND_PID
    echo "Backend on port 5000 stopped."
else
    echo "No backend process found on port 5000."
fi

# Stop frontend HTTP server
echo "Stopping frontend (HTTP server)..."
FRONTEND_PID=$(lsof -ti:8000)
if [ -n "$FRONTEND_PID" ]; then
    kill $FRONTEND_PID
    echo "Frontend on port 8000 stopped."
else
    echo "No frontend process found on port 8000."
fi

echo "All services stopped."