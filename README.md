# 🧩 Rubik's Cube Solver

An interactive web-based Rubik's Cube Solver using Java backend and HTML/CSS/JS frontend .

## 🚀 Features

- Set your cube configuration manually
- Click "Solve" to get solving steps
- Java backend for cube logic
- Extensible UI for future upgrades

## 📦 How to Run

### 1. Frontend
Open `frontend/index.html` in your browser.

### 2. Backend
```bash
javac -cp gson.jar backend/CubeSolver.java server/Server.java
java -cp .:gson.jar server.Server  
