# ShopZone - Prompts Documentation

## Project Overview

ShopZone is a React-based single-page e-commerce application. The project uses React Router for navigation, Context API for global state management, the DummyJSON API for product data, and localStorage for cart persistence.

## Prompts Used During Development

### 1. Project Setup

Create a React SPA called ShopZone using Vite. Set up the basic project structure with components, pages, and context folders.

### 2. React Routing

Set up React Router with routes for Home, Shop, Contact, Product Details, Cart, Login, and Checkout pages.

### 3. Product API

Fetch products from the DummyJSON products API and display them in a responsive product grid.

### 4. Product Details

Create a product details page using a dynamic route. Use `useParams()` to get the product ID and fetch the corresponding product from the API.

### 5. Cart Context

Create a React Context API based cart system. Allow users to add products, remove products, increase and decrease quantities, and calculate the total price.

### 6. Cart Badge

Add a cart item count to the Navbar that updates automatically whenever the cart changes.

### 7. Local Storage

Add localStorage support so that cart items remain available after refreshing the browser.

### 8. Guest Login

Create an authentication context and add a Login as Guest option. Store the login state globally using React Context API.

### 9. Protected Checkout

Create a protected route for Checkout. Redirect users to the Login page when they try to access Checkout without logging in.

### 10. Debugging and Testing

Fix routing, import, file naming, and component issues during development. Test product navigation, cart operations, login flow, protected routes, and checkout functionality.

## Technologies Used

* React.js
* Vite
* React Router DOM
* Context API
* JavaScript
* HTML
* CSS
* DummyJSON REST API
* localStorage

## Development Notes

The application was developed as a single-page React application. React Router handles client-side navigation, Context API manages global cart and authentication state, and localStorage provides cart persistence across browser refreshes.
