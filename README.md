# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Mechanical Keyboard Shop

## Overview
Welcome to the Mechanical Keyboard Shop project. This is an e-commerce website built for mechanical keyboard enthusiasts. The website features easy product browsing, detailed product pages, a smooth cart system, and powerful product management tools for administrators. Users can enjoy features like fast search, page refresh warnings, and filtering. Optional Stripe integration ensures secure payments.

## Technologies
- **Frontend**: React with Vite, TypeScript, Redux, RTK Query
- **Backend**: TypeScript, Node.js, Express, MongoDB, Mongoose, Zod

## Core Pages and Functionalities

### Homepage / Landing Page
- Header Section / Navbar
- Hero Section
- Service Advertisement
- Featured Products
- Top Featured Brands
- Customer Reviews
- Extra Sections
- Footer

### Products Page
- Product Cards
- Searching and Filtering

### Product Details Page
- Product Information
- Shopping Cart

### Cart Page
- Cart Items
- Pricing Details
- Proceed To Checkout Button

### Checkout Page
- User Details
- Payment Methods

### Product Management/Dashboard Page
- Product List Table
- Action Buttons
- Adding a Product

### About Us Page

### Contact Us Page

### UI/UX
- Quality
- Responsiveness

### Bonus Features
- Debounce API Calls
- Page Refresh Warning
- Animations

#import redux-react-Toolkit.shadcn and tailwind used for design

## Setup
To get started with the project, clone the repository and install the required dependencies.

```bash
git clone <repository-url>
cd mechanical-keyboard-shop
npm install
npm run dev

