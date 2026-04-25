# Backend Engineer Portfolio 

A modern, high-end, professional developer portfolio tailored for a Backend Software Engineer. Built with React, TailwindCSS (v4), and Framer Motion. 

This portfolio features a dark theme, glassmorphism, smooth animations, and is fully responsive. 

## Features
- **Hero Section:** Stunning visual entry with animated indicators.
- **Workflow Journey:** A concise timeline of engineering growth.
- **Skills Matrix:** Clearly categorized tags mapping out the backend-centric tech stack.
- **Feature Projects Showcase:** Custom layout highlighting major production-level work like WorkHub.
- **Experience Timeline:** Elegant visual timeline for professional history.
- **Contact Hub:** Direct CTAs with GitHub, LinkedIn, and Email access.

## Tech Stack
- **Framework:** React (Vite)
- **Styling:** TailwindCSS 4
- **Animations:** Framer Motion
- **Icons:** Lucide React & React Icons

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run local development server:**
   ```bash
   npm run dev
   ```

## Deploying to GitHub Pages

This project is configured and optimized for GitHub Pages. 

### Step 1: Update Vite Config Base Path
Ensure the `base` property in `vite.config.ts` matches your exact GitHub repository name. 
For example, if your repo is `username/portfolio-1`, ensure `vite.config.ts` has:
```ts
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: "/portfolio-1/", // Change to your repository name
})
```
*Note: If deploying to a custom domain (e.g. `yourname.com`), change `base` to `"/"`.*

### Step 2: Deploy Script Settings
1. Go to `package.json`.
2. Add a `deploy` script inside `"scripts"`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Step 3: Run Deployment
Run the following command to deploy the portfolio to the `gh-pages` branch:
```bash
npm run deploy
```

Once executed successfully, your site will be available on your GitHub Pages URL (e.g. `https://<username>.github.io/portfolio-1`).

## Personalization
To customize the website for yourself:
- Search for "Ketan Pillai" and replace it with your name.
- Update `src/components/About.tsx` with your journey.
- Modify the JSON arrays in `Skills.tsx`, `Projects.tsx`, and `Experience.tsx` to reflect your true professional history.
