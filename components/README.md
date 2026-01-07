Components Folder (JS / TSX)

This folder contains all reusable UI components used in the project.
Components are provided in both JavaScript (.js) and TypeScript (.tsx) formats to give developers flexibility based on their preference or project setup.


---

📁 Folder Structure

components/
├── Navbar.js        # JavaScript version
├── Navbar.tsx       # TypeScript version
├── Hero.js
├── Hero.tsx
├── Benefits.js
├── Benefits.tsx
├── Destinations.js
├── Destinations.tsx
├── Partners.js
├── Partners.tsx
├── Testimonials.js
├── Testimonials.tsx
├── Footer.js
├── Footer.tsx

> ⚠️ Only one version (.js or .tsx) is required at a time.
Choose the format that best fits your project.




---

🧠 How to Choose

✅ Use JavaScript (.js) if:

Your project is plain React

You don’t use TypeScript

You want a simpler setup


✅ Use TypeScript (.tsx) if:

Your project uses TypeScript

You want better type safety

You prefer scalable, large-codebase practices



---

🔁 Switching Between JS & TSX

You can freely switch between .js and .tsx components.

// JavaScript
import Navbar from './components/Navbar.js';

// TypeScript
import Navbar from './components/Navbar';

> Make sure your build setup supports TypeScript when using .tsx.




---

🎯 Purpose

This dual-format approach is intentional and designed to:

Support both JS & TS developers

Improve reusability

Make the project flexible for different environments



---

👨‍💻 Author

DevByJash
Web Developer


---

📜 License

All Rights Reserved

These components are publicly visible for portfolio and educational review only.
Copying, modifying, distributing, or deploying any component without explicit permission is strictly prohibited.
