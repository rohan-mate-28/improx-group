# Improx Group Website

A full-featured multi-page React + Vite + Tailwind CSS website for **ImproxGroup.com**.

## 🚀 Quick Start

### 1. Create project with Vite

```bash
npm create vite@latest improx-group -- --template react
cd improx-group
```

### 2. Install dependencies

```bash
npm install react-router-dom lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Replace all files

Copy the entire `src/` folder and config files from this project into your Vite project, replacing the defaults.

### 4. Run dev server

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
improx-group/
├── public/
│   └── logo.png              ← Drop your PNG logo here
├── src/
│   ├── components/
│   │   ├── Icons.jsx          ← All SVG icons (social, UI)
│   │   ├── Layout.jsx         ← Navbar + Footer wrapper
│   │   ├── Navbar.jsx         ← Responsive nav with mega menu
│   │   └── Footer.jsx         ← Footer with links + social
│   ├── data/
│   │   └── departments.js     ← All 10 departments + social links
│   ├── pages/
│   │   ├── HomePage.jsx       ← Hero, stats, dept grid, CTA
│   │   ├── AboutPage.jsx      ← Mission, values, team
│   │   ├── DepartmentsPage.jsx← All departments listing
│   │   ├── DepartmentPage.jsx ← Individual dept detail
│   │   ├── ContactPage.jsx    ← Contact form + details
│   │   └── NotFoundPage.jsx   ← 404
│   ├── App.jsx                ← Routes
│   ├── main.jsx               ← Entry point
│   └── index.css              ← Tailwind + custom styles
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary | Indigo (#4f46e5) |
| Accent | Pink (#ec4899) |
| Background | Near-black (#0f0f1a) |
| Glass | rgba(255,255,255,0.05) with blur |

---

## 📄 Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/departments` | All Departments |
| `/departments/:slug` | Department Detail (10 pages) |
| `/contact` | Contact |

### Department slugs
`consulting`, `cloud`, `marketing`, `data`, `business-process`,
`media-publication`, `market-research`, `virtual-assistant`,
`information-technology`, `social-media`

---

## 🔧 Customization

- **Logo**: Drop `logo.png` into `/public/` folder
- **Content**: Edit `src/data/departments.js` to update all department info
- **Colors**: Modify `tailwind.config.js`
- **Contact info**: Update `contactInfo` object in `src/data/departments.js`

---

## 📞 Contact
Phone: +91 9370992910  
Website: www.ImproxGroup.com
