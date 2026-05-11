# React-app

A small React application scaffolded with Vite. This project demonstrates a simple component-driven UI and routing, and is intended for learning and lab exercises with multiple tasks.

## Summary 

- Framework: React + Vite
- Language: JavaScript in JSX.
- Purpose: Educational/demo app with small interactive components and page routing all in one 

## Key Features

- Toggle a bulb on/off (`BulbToggler`)
- Registration and Login (User/admin)
- Registered users view and password view
- Simple counter panel (`CounterPanel`)
- Manage a list of items with add/remove (`ItemListManager`, `ItemListView`)
- Password visibility toggle (`passwordToggler`)
- Basic multi-page routing: `Home`, `About`, `Contact`

## Project Structure

- `index.html`, `vite.config.js`, `package.json`
- `src/main.jsx` — app entry
- `src/App.jsx` — routes and layout
- `src/pages/` — `Home.jsx`, `About.jsx`, `Contact.jsx`
- `src/components/` — interactive components listed above

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
- Component props are simple — feel free to extend with tests or TypeScript.
- When adding features, follow existing naming and folder patterns under `src/`.

## License

Feel free to use this code for learning and demos. Add a license file if you plan to distribute.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React_Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
