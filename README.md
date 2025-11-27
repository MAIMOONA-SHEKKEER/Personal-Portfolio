# 🌐 Personal Portfolio — Maimoona Shekkeer

A modern, fully responsive personal portfolio built with **Vite**, **React**, and **Material UI**, featuring:

- 🌓 **Dark/Light mode toggle**
- 📱 **Fully responsive design**
- 🎨 **Custom theme with styled components**
- ⚡ **Optimized Vite setup using PNPM**
- 🧩 **Clean file structure with separated styled components**
- 🚀 **Deployed on Vercel**

---

## ✨ Features

### 🎨 Modern UI & Branding

- Custom theme using Material UI
- Dark & light mode with smooth transitions
- Elegant gradients and glass-like UI elements
- Polished animations and hover effects

### 🧱 Modular Architecture

- All styled components extracted into `/styles`
- Clean, readable functional components
- Custom hooks
- Configuration-based sections (data-driven)

### 📱 Fully Responsive

Every section adapts beautifully for:

- Mobile
- Tablets
- Desktops

### 🚀 Deployment Ready

- Vite build optimized
- Works perfectly on **Vercel** or **Netlify**

---

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── SectionWrapper.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       └── Contact.jsx
│
├── styles/
│   ├── heroStyles.js
│   ├── sectionStyles.js
│   ├── skillsStyles.js
│   ├── experienceStyles.js
│   ├── projectStyles.js
│   └── contactStyles.js
│
├── data/
│   ├── personalInfo.js
│   ├── skills.js
│   ├── experiences.js
│   └── projects.js
│
├── hooks/
│   ├── useColorMode.js
│   └── usePortfolioData.js
│
├── theme/
│   └── theme.js
│
└── App.jsx
```
