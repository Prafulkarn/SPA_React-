# React-app

A small React application scaffolded with Vite. This project demonstrates a simple component-driven UI and routing, and is intended for learning and lab exercises with multiple tasks.

## Summary

- Framework: React + Vite
- Language: JavaScript in JSX
- Purpose: Educational/demo app with small interactive components and page routing all in one with user authentication

## Key Features

- Toggle a bulb on/off (`BulbToggler`)
- Registration and Login (User/admin)
- Registered users view and password view (for admin only)
- Simple counter panel (`CounterPanel`)
- Manage a list of items with manual add/remove (`ItemListManager`, `ItemListView`)
- Password visibility toggle (`passwordToggler`)
- Basic multi-page routing: `Home`, `About`, `Contact`

## Project Structure

- `index.html`, `vite.config.js`, `package.json`
- `src/main.jsx` - app entry
- `src/App.jsx` - routes and layout
- `src/pages/` - `Home.jsx`, `About.jsx`, `Contact.jsx`
- `src/components/` - interactive components listed above

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open the app in your browser at the URL shown by Vite (usually `http://localhost:5173`).

## Notes for Developers

- This repository is intentionally small and opinionated for learning purposes.
- Component props are simple - feel free to extend with tests or TypeScript.
- When adding features, follow existing naming and folder patterns under `src/`.

## License

Feel free to use this code for learning and demos. Add a license file if you plan to distribute.
