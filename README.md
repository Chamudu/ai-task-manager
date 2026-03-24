# AI-Powered Task Manager

A modern, full-stack Task Management application that uses AI to break down complex tasks into actionable sub-steps.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![Tech Stack](https://img.shields.io/badge/Stack-MERN-blue)

## 📖 Project Overview

This project demonstrates a full-stack web architecture using **React (Vite)** for the frontend and **Node.js (Express)** for the backend. The key differentiator is the "AI Copilot" feature, which analyzes task titles and suggests helpful breakdowns or context to improve productivity.

### Key Features
- **Modern UI/UX:** Glassmorphism design, dark mode, and smooth micro-interactions.
- **REST API:** Custom-built Node.js/Express backend handling CRUD operations.
- **Real-time Updates:** Instant state management without page reloads.
- **AI Integration:** *[Coming Soon]* Automaticaly generates sub-tasks and tips using LLMs.

---

## 🛠️ Technology Stack

| Area | Technology | Reason for Choice |
|------|------------|-------------------|
| **Frontend** | React + Vite | Industry standard for performant SPAs. Vite offers instant HMR. |
| **Styling** | Vanilla CSS3 | Demonstrates mastery of CSS Variables, Flexbox, and complex animations without framework crutches. |
| **Backend** | Node.js + Express | Lightweight, event-driven architecture suitable for real-time applications. |
| **Data** | In-Memory / PostgreSQL | *[Current: In-Memory]* Fast prototyping. *[Future]* Robust relational data storage. |

---

## Getting Started

To run this project locally, you need Node.js installed.

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/ai-task-manager.git
cd ai-task-manager
```

### 2. Run the Backend (Server)
The server runs on `http://localhost:3000`.
```bash
cd server
npm install
npm run dev
```

### 3. Run the Frontend (Client)
The client runs on `http://localhost:5173`.
```bash
cd client
npm install
npm run dev
```

---

