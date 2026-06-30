# Drip — Full‑Stack E‑Commerce Demo

A polished full‑stack e‑commerce application with separate Customer and Admin React frontends (Vite + Tailwind) and a Node.js + Express + MongoDB backend. Drip showcases product CRUD, image uploads (Cloudinary), shopping cart and order flows — an excellent portfolio project to demo end‑to‑end development skills to recruiters.

---

## Highlights (what to show a recruiter)
- Two separate frontends: Customer (frontEnd/) and Admin (Admin/) — demonstrates multi‑app organization.
- Clean backend API with Express and modular routes: user, product, cart, order.
- Media handling with Cloudinary + multer for uploads.
- Environment‑driven config (MongoDB, Cloudinary, JWT) so the app is production‑style and configurable.
- Fast developer experience using Vite (HMR), Tailwind CSS, and nodemon.

---

## Tech stack
- Language: JavaScript (ES Modules)
- Frontend: React + Vite, Tailwind CSS, PostCSS
- Backend: Node.js, Express, Mongoose (MongoDB)
- Media: Cloudinary (image hosting)
- Notable libs: axios, react-router-dom, react-toastify, multer, jsonwebtoken, bcrypt

---

## Repo layout
```
Admin/           # Admin dashboard frontend (React + Vite)
frontEnd/        # Customer-facing frontend (React + Vite)
backEnd/         # Express API
  ├─ config/     # mongodb.js, cloudinary.js (env-driven)
  ├─ controllers/# request handlers (user/product/cart/order)
  ├─ models/     # Mongoose schemas
  ├─ routes/     # Express routers
  └─ server.js   # App entrypoint (registers routes, middlewares)
README.md        # (this file)
```

How it fits together: Each frontend runs as a separate Vite app (local dev servers). The backend exposes REST endpoints under /api/* and connects to MongoDB and Cloudinary. Frontends call the API (axios) to authenticate users, list and manage products, handle cart operations and create orders.

---

## Features
- User registration & authentication (JWT)
- Product CRUD (Admin) and product browsing (Customer)
- Cart management and order creation
- Image upload and hosting via Cloudinary
- Modular server structure for clear separation of concerns

---

## Quickstart — run locally

Prerequisites
- Node.js (v16+ recommended)
- npm
- MongoDB (local or hosted)
- Cloudinary account (for image uploads)

1) Clone repo
```bash
git clone https://github.com/kingpin9292/Drip_Full-Stack.git
cd Drip_Full-Stack
```

2) Start the backend
```bash
cd backEnd
npm install
# create a .env file (see example below)
npm run server     # uses nodemon for auto-reload
# or: npm start    # runs node server.js
```

3) Start the Customer frontend
```bash
cd ../frontEnd
npm install
npm run dev
# Vite dev server (usually http://localhost:5173)
```

4) Start the Admin frontend (in a separate terminal)
```bash
cd ../Admin
npm install
npm run dev
# Vite dev server for admin UI
```

5) Quick API check
```bash
curl http://localhost:4000/
# Response: "API Working"
```

---

## Environment variables

Example backEnd/.env
```
PORT=4000
MONGODB_URL=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/drip?retryWrites=true&w=majority
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret
JWT_SECRET=your_jwt_secret
```

Frontend env (if needed) — create .env in frontEnd/ or Admin/ when using runtime API URLs:
```
VITE_API_URL=http://localhost:4000/api
```

---

## Available scripts

backEnd/package.json
- npm run server — nodemon server.js (dev)
- npm start — node server.js (production)

frontEnd/package.json & Admin/package.json
- npm run dev — start Vite dev server
- npm run build — production build
- npm run preview — preview the production build
- npm run lint — run eslint

---

## API (quick map)
- GET /                     → health check ("API Working")
- /api/user                 → user registration, login, profile
- /api/product              → product listing, details, create/update/delete (admin)
- /api/cart                 → cart operations
- /api/order                → order creation & management

(See backEnd/routes/ for exact endpoints and controllers for request/response shapes.)

---

## Demo assets
Include a short demo GIF or screenshots in the repo root (e.g., /assets/demo.gif) and link them here to make the README pop. Recruiters love a 10–20s GIF that shows product upload, customer browse, cart → order flow.

Example:
![Demo GIF](assets/demo.gif)

---

## Suggested talking points for interviews
- Describe how you structured the API and why you separated admin/customer frontends.
- Explain how Cloudinary is integrated for image uploads (security, signed uploads if implemented).
- Discuss how you handle authentication (JWT) and which endpoints are protected.
- Describe areas you’d extend next: payments, tests, CI/CD, containerization.

---

## Roadmap & improvements
- Add automated tests (Jest / Supertest) for backend endpoints
- Add Docker + docker-compose for reproducible dev and demo
- Add CI (GitHub Actions) for linting, tests, and deploy previews
- Add payment gateway integration (Stripe / Razorpay) for checkout flow
- Harden security: rate limiting, input validation, CORS config

---

## Contributing
If you'd like to contribute:
1. Fork the repo
2. Create a feature branch (feature/your-feature)
3. Open a PR with a clear title and description of changes

---

## License
Add a LICENSE file (e.g., MIT) to make reuse and hiring/assessment easier.

---

## Contact
Created by Kingpin9292 — include your full name, email, LinkedIn and portfolio link here so recruiters can follow up quickly.

- Email: your.email@example.com
- GitHub: https://github.com/kingpin9292
- LinkedIn: https://www.linkedin.com/in/yourprofile

---

If you want, I can:
- Drop this directly into a README.md file for you,
- Generate a demo GIF placeholder and a short deploy guide (Vercel / Netlify for frontends + Heroku / Render for backend),
- Or create a docker-compose and a GitHub Actions workflow to make the project production/demo‑ready.

Which would you like me to do next?
```
