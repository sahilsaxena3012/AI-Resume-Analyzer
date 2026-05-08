# AI Resume Analyzer

🔗 Live Demo: https://ai-resume-analyzer-ct3a.vercel.app/

AI-powered resume analysis platform built with React, TypeScript, and Puter.

Upload resumes and receive ATS scoring, resume feedback, and performance insights through a modern dashboard interface.

## Features

- 📄 Resume Upload
- 🤖 ATS Scoring
- 📊 Analytics Dashboard
- 💾 Resume Management
- 🔐 Secure Authentication
- 📈 Performance Insights
- 🎨 Responsive UI with Tailwind CSS

## Tech Stack

- React
- TypeScript
- React Router v7
- Tailwind CSS
- Vite
- Zustand
- PDF.js
- Puter API

## Installation

```bash
git clone <repo-url>
cd ai-resume-analyzer
npm install
```

## Run Locally

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t ai-resume-analyzer .
```

### Run Container

```bash
docker run -p 3000:3000 ai-resume-analyzer
```

App runs on:

```bash
http://localhost:3000
```

### Docker Compose

```bash
docker-compose up
```

## Project Structure

```bash
app/
├── routes/
├── components/
├── lib/
└── root.tsx
```
