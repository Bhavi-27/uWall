# uWall – Chitkara University Event & Photo Sharing (Frontend Only)

uWall is a basic **frontend-only** website for Chitkara University. It lets students:

- Discover upcoming **events, fests and hackathons**
- Upload and share **event details** with peers
- Log in / sign up using only their **`@chitkara.edu.in`** email IDs
- Learn about the **team** behind the project

Built using **HTML, CSS, JavaScript and React** (via CDN). No backend or database is connected – all functionality is demo/prototype level.

---

## Features

### Pages

- **Home** (`/`)
  - Hero section explaining uWall
  - Highlights how it improves campus engagement & community spirit
  - Quick stats and call-to-action buttons

- **Events** (`/events`)
  - Sample list of upcoming events at Chitkara University
  - Each card shows title, category, date, venue and tags

- **Upload Event** (`/upload`)
  - Form to upload an event:
    - Title, category, date, venue, description
  - On submit, shows a confirmation message (no real saving – frontend only)

- **Login** (`/login`)
  - Email + password form
  - Email is **validated** to end with `@chitkara.edu.in`
  - On valid details, shows a success alert and redirects to Home (demo only)

- **Sign Up** (`/signup`)
  - Full name, email and password form
  - Email must be `@chitkara.edu.in` and password must be at least 6 characters
  - On success, shows an alert and redirects to Login (demo only)

- **About Us** (`/about`)
  - Explains what uWall is and its goal for Chitkara University
  - Team members:
    - **Bhumika Raheja** – Frontend & UX
    - **Bhoomi Garg** – React & Routing
    - **Bhavika Mehta** – Content & Flows

---

## Tech Stack

- **HTML5** – structure (`index.html`)
- **CSS3** – red and white Chitkara theme (`styles.css`)
- **JavaScript + React** – SPA behavior (`app.js`)
  - React & ReactDOM via **CDN**
  - React Router DOM via **CDN**
  - Babel in-browser for JSX (suitable for demos/assignments)

No build system, bundler or backend is used.

---

## Project Structure

- `index.html` – root HTML file that loads React, React Router, Babel and `app.js`
- `styles.css` – global styling (navbar, hero, cards, forms, about section, responsive rules)
- `app.js` – React single-page app with all routes and components
- `README.md` – this documentation

---

## How to Run Locally

1. **Open a terminal** in the project folder (where `index.html` is located).
2. Start a simple static web server. For example:

   **Option 1 – using Node (if installed):**

   ```bash
   npx serve .
   ```

   **Option 2 – using Python (if installed):**

   ```bash
   python -m http.server 8000
   ```

3. Open your browser and visit the URL printed by the server (for example):

   - `http://localhost:8000`

4. Navigate using the top navbar: **Home, Events, Upload, About Us, Login, Sign Up**.

---

## Notes & Limitations

- This is a **frontend-only prototype** – there is **no database or backend**.
- Login and Sign Up **do not** create real accounts; they just show alerts and navigate.
- Event upload **does not** actually store events; a message is shown after submit.
- Email validation only checks that the email ends with `@chitkara.edu.in`.

This project can be used as a base to add a real backend (Node/Express, Firebase, etc.) and a database in the future.
