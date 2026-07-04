# Developer Portfolio - Content & Technical Documentation

This file contains the complete copy/content of the portfolio website from Header to Footer, followed by the technical instructions for local setup and deployment. You can copy the content section directly to ask Claude or other AI models for review, feedback, or copy updates.

---

# PORTFOLIO WEBSITE CONTENT (HEADER TO FOOTER)

Below is the exact text flow and content rendered in the portfolio application, structured by section.

## 1. Header & Navigation (Navbar)
* **Logo:** `KP.` (Ketan Pillai)
* **Navigation Links:**
  * About
  * Skills
  * Projects
  * Experience
  * Contact
* **Primary Call-to-Action:** `Hire Me` (links to Contact section)

---

## 2. Hero Section
* **Availability Tag:** `🟢 Available for new opportunities`
* **Main Heading (Hybrid Animations):** *"Full-Stack Engineer building [phrases]"*
  * **Desktop Behavior (md and up):** Uses typing animation (`TypeAnimation`) to type out each phrase.
  * **Mobile Behavior (below md):** Uses a premium slide-up and fade-in cross-fade transition (`AnimatePresence`) for smooth word cycling without layout shifting.
  * **Key Phrases:**
    * `scalable full-stack applications`
    * `high-performance backends`
    * `integrated subscription billing`
    * `robust microservices`
    * `real-time backend systems`
    * `modern React & Vue interfaces`
    * `interactive admin dashboards`
    * `secure cloud architectures`
    * `optimized database schemas`
    * `end-to-end SaaS products`
* **Introduction / Subtitle:**
  > Hi, I'm Ketan Pillai. I build full-stack products end-to-end — from scalable Node.js, Laravel, and Django backends to the React and Vue interfaces on top — with particular strength in API architecture and cloud infrastructure.
* **Call-to-Action Buttons:**
  1. `View Projects` (links to Projects section)
  2. `Download Resume` (links to `Ketan Pillai.pdf` asset)
  3. `Contact Me` (links to Contact section)

---

## 3. Tech Marquee (Tech Stack Carousel)
A continuous marquee showcasing all technologies and tools from the Technical Arsenal:
* **AI-Assisted Development:** Antigravity, Claude Code, Gemini, ChatGPT, Cursor, GitHub Copilot (Prioritized First)
* **Frontend:** React.js, Next.js, Vue.js, TailwindCSS, Bootstrap, Redux Toolkit
* **Languages & Backend:** Node.js, TypeScript, Django, Python, Laravel, Express.js
* **Cloud & Infrastructure:** AWS, Docker, GitHub Actions, Nginx, Linux
* **Database & Cache:** PostgreSQL, MySQL, Redis, MongoDB, SQLite
* **Payments & Integrations:** Stripe, Razorpay, Firebase, SMS/OTP APIs
* **Architectural Core Concepts:** REST APIs, Query Optimization, JWT Auth, RBAC

---

## 4. About Me (Engineering Philosophy)
* **Section Title:** `Engineering Philosophy`
* **Narrative:**
  > I started my tech journey with a relentless curiosity for how things work under the hood. From an internship to a full-time role as a Junior Software Developer, I've worked across the entire stack — building REST APIs, admin panels, and customer-facing interfaces for products used by real teams and paying subscribers.
  >
  > Whether it's designing complex database schemas, building backend flows in Django, Laravel, and Node.js, wiring up payment infrastructure with Stripe and Razorpay, or building the React/Vue interfaces on top, my focus stays on clean, maintainable, scalable code.
  >
  > I also lean heavily on AI-assisted development — tools like Claude Code, GitHub Copilot, and Cursor are part of my daily workflow, letting me move faster through boilerplate and iterate on ideas quickly without sacrificing code quality.
* **Core Quote / Identity:**
  > *"If there's one thing teams consistently count on me for, it's my ability to map out complex backend logic on day one and deliver fast, production-ready systems without cutting corners."*
* **Core Strengths (6 pillars):**
  1. **End-to-End Ownership:** Experience building real-world systems across backend APIs, admin panels, and frontend interfaces — not just one layer of the stack.
  2. **Performance First:** Focused on optimizing database queries, caching strategies, and reducing API response times.
  3. **Problem Solver:** I thrive on breaking down complex architectural challenges into scalable, manageable microservices.
  4. **Client Communication:** Bridging the gap between technical complexity and business goals through transparent, clear dialogues.
  5. **After-Sales Support:** Dedicated to long-term success with robust maintenance, proactive hotfixes, and seamless feature integration.
  6. **Clean Architecture:** Prioritizing deeply maintainable, extensively documented, and self-explanatory codebases for future scalability.

---

## 5. Skills Section (Technical Arsenal)
* **Section Title:** `Technical Arsenal`
* **Subtitle:** *A comprehensive overview of the technologies and tools I use to architect and build scalable full-stack applications.*
* **Categories & Skills:**
  * **Backend Core:** Python, Django, Node.js, Express.js, Laravel, REST APIs, TypeScript, JWT Authentication, RBAC
  * **Database & Cache:** MySQL, PostgreSQL, MongoDB, SQLite, Redis, Query Optimization
  * **Cloud & DevOps:** AWS (EC2, S3, RDS, ALB, Secrets Manager), Docker, Nginx, GitHub Actions (CI/CD), Linux
  * **Frontend:** React.js, Redux Toolkit, Vue.js, Next.js, TailwindCSS, Bootstrap
  * **Payments & Integrations:** Stripe, Razorpay, Firebase (Realtime DB, Firestore), OTP/SMS APIs
  * **AI-Assisted Development:** Claude Code, GitHub Copilot, Cursor, ChatGPT, Gemini, Antigravity

---

## 6. Services Offered (Freelance Offerings)
* **Section Title:** `Freelance Offerings`
* **Subtitle:** *Ready to bring your ideas to life or fix what's broken? Here is exactly how I can help your business grow.*
* **Service Cards:**
  1. **Full-Stack SaaS MVP**
     * *Description:* Rapidly prototyping and delivering complete web applications from scratch, pairing robust Django/Laravel/Node.js backends with modern React or Vue.js frontends.
  2. **Custom API Development**
     * *Description:* Building secure, highly-scalable, and fully documented REST APIs tailored to your business needs, powered by Django, Laravel, or Node.js.
  3. **Database Architecture**
     * *Description:* Designing high-performance schemas in MySQL and PostgreSQL. Optimizing slow queries, caching with Redis, and ensuring data integrity.
  4. **Refactoring & Bug Fixing**
     * *Description:* Diving into complex legacy systems to resolve critical bugs, eliminate technical debt, and increase overall application stability.

---

## 7. Projects Section (Featured Work)
* **Section Title:** `Featured Work`
* **Subtitle:** *Selected projects demonstrating my ability to build complex, scalable systems with real business impact.*
* **Project Showcase:**
  1. **WorkHub (Flagship Project)**
     * *Subtitle:* Project & Task Management Platform
     * *Description:* A modular project and task management system with role-based access for Admins, Managers, and Team Members. Built as three services — REST API, web client, and admin panel — with a clean, service-based Django architecture.
     * *Tech Stack:* Django, Django REST Framework, MySQL
     * *Source Code:* [API](https://github.com/ketanven/fwts_appapi) | [Web](https://github.com/ketanven/fwts_web) | [Admin](https://github.com/ketanven/fwts_admin)
  2. **Milkly**
     * *Subtitle:* Dairy Subscription & E-Commerce Platform
     * *Description:* A full-stack e-commerce and subscription platform for dairy merchants and customers — shopping cart, wishlist, and recurring daily/weekly delivery subscriptions, with a seller panel and multi-level admin console.
     * *Tech Stack:* Laravel 12, Vite, Tailwind CSS, SQLite, Stripe, Razorpay, JWT
     * *Source Code:* [GitHub Repository](https://github.com/ketanven/Milky)
  3. **E-Wheels**
     * *Subtitle:* Smart Vehicle Rental & Reservation System
     * *Description:* A vehicle rental and reservation platform with a dynamic customer booking widget and an AdminLTE-powered admin dashboard, synchronizing admin data in real time between a relational database and Firebase.
     * *Tech Stack:* Laravel 12, Tailwind CSS, AdminLTE 4, Firebase Realtime DB, Firestore
     * *Source Code:* [GitHub Repository](https://github.com/ketanven/E-Wheels)
  4. **Furni**
     * *Subtitle:* Two-Sided Buyer/Seller E-Commerce Platform
     * *Description:* An e-commerce platform for furniture with buyer-side cart/wishlist/checkout and a seller-side inventory dashboard, integrated with Razorpay payments and SMS-OTP password recovery.
     * *Tech Stack:* Django, SQLite, Bootstrap, Razorpay, Textbelt OTP API
     * *Source Code:* [GitHub Repository](https://github.com/ketanven/Furni)

---

## 8. Experience & Journey Timeline
* **Section Title:** `My Journey`
* **Subtitle:** *A continuous path of learning and building robust software solutions.*
* **Timeline Nodes:**
  1. **Junior Software Developer** | *iCoderz Pvt. Ltd.* (Apr 2024 – Present)
     * Promoted to full-time Junior Software Developer after completing a 6-month internship.
     * Client and company codebases below are proprietary — described here without source links, same as your resume.

     * **SourceCAD** — Online CAD & Engineering Learning Platform *(Node.js, React.js, Next.js, Express.js, PostgreSQL)*
       * Built and maintained REST APIs across web, admin, and mobile clients for a CAD/engineering e-learning platform.
       * Designed and implemented an end-to-end subscription billing system integrating Stripe and Razorpay — plan upgrades, downgrades, and webhook-driven billing cycles.
       * Owned the complete React.js admin panel, including course management, enterprise team dashboards, and training-compliance tracking.

     * **Go Payana** — Ride-Hailing Platform *(Laravel, Vue.js)*
       * Built REST APIs powering rider and driver mobile apps for a zero-commission ride-hailing platform.
       * Developed the complete Vue.js admin panel for ride tracking, driver management, and fare configuration.
       * Implemented OTP-based authentication and real-time driver-matching and location features.

     * **ToMoveOut** — International Expat Marketplace *(Laravel, JavaScript)*
       * Delivered APIs, the Laravel Blade admin panel, and the main JavaScript website frontend for a multi-country, multi-language (English/French/Spanish) relocation marketplace.
       * Built listing search/filters, and in-app messaging.

     * **PMS** — Internal Project Management System *(Laravel, Vue.js)*
       * Extended a company-wide project management system, adding APIs for task tracking, real-time check-in timers, and manager review workflows.
       * Built role-based (CEO/Manager/Employee) dashboards with Kanban task boards and activity logs.
  2. **Master of Computer Applications (MCA)** | *Silver Oak University* (Completed — CGPA 9.3)
     * Pursuing advanced studies in computer science and application development.
  3. **Backend Development Intern** | *iCoderz Pvt. Ltd.* (Oct 2023 – Mar 2024)
     * Contributed to production Laravel applications and REST API development under senior engineer guidance.
     * Gained hands-on experience with database design, validation, and deployment activities.
     * Learned Agile workflows and version control practices in a professional environment.
  4. **Bachelor of Computer Applications (BCA)** | *GLS University* (2021 – 2024 — CGPA 8.0)
     * Completed bachelor's degree focusing on core computer science subjects, software engineering, and database management systems.
  5. **12th Commerce** | *Nelson's Higher Secondary School* (Completed)
     * Completed higher secondary education establishing a strong quantitative foundation.

---

## 9. Contact Section
* **Section Title:** `Let's build something great.`
* **Subtitle:** *Whether you need a robust backend architecture, scalable APIs, or an optimized system for your business, I'm ready to turn your ideas into reality.*
* **Interactive Contact Form Fields:**
  * Name
  * Email
  * Message
  * Submit Button: `Send Message`
* **Social Profiles & Platforms:**
  * **LinkedIn:** [Ketan Pillai LinkedIn Profile](https://www.linkedin.com/in/ketan-venkatesh-ba1663277/)
  * **GitHub:** [Ketan Pillai GitHub Profile](https://github.com/ketanven)
  * **Fiverr:** [Ketan Pillai Fiverr Profile](https://www.fiverr.com/ketanpillai)
  * **Upwork:** [Ketan Pillai Upwork Profile](https://www.upwork.com/freelancers/~015b0cdcd82a042980)

---

## 10. Footer
* **Copy:** `© 2026 Ketan Pillai. All rights reserved.`

---
---

# TECHNICAL DEVELOPER INSTRUCTIONS

## Project Overview
A modern, high-end, professional developer portfolio tailored for a Backend Software Engineer. Built with React, TailwindCSS (v4), and Framer Motion. 

This portfolio features a dark theme, glassmorphism, smooth animations, and is fully responsive. 

### Tech Stack
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
