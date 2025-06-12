# Forkify 🍽️

**Forkify** is a modern, responsive, feature-rich recipe application that allows users to search, view, bookmark, and upload recipes from a public API. It is designed using the MVC (Model-View-Controller) architecture and built entirely with vanilla JavaScript (ES6+), making it a powerful showcase of clean code structure, modular design, and modern frontend development practices.

> 🌍 **Live App**: [https://forkify-dmytro-zuiev.netlify.app](https://forkify-dmytro-zuiev.netlify.app)
> 📦 **GitHub Repo**: [https://github.com/zdvman/forkify](https://github.com/zdvman/forkify)
> 🔗 **API**: [https://forkify-api.jonas.io/](https://forkify-api.jonas.io/)

---

## 🔧 Core Features

* **🔍 Recipe Search:** Search over a million recipes by ingredients or keywords.
* **📄 Detailed Recipe View:** View full recipes with cooking time, servings, and ingredients.
* **🔢 Servings Control:** Dynamically adjust servings, and ingredients update instantly.
* **🔖 Bookmarks:** Bookmark your favorite recipes and persist them using localStorage.
* **➕ Upload Your Recipe:** Submit your own custom recipes with ingredients and prep data.
* **📄 Pagination:** Easily browse through paginated search results.
* **⚡ Instant UI Updates:** Optimized DOM updates via a virtual DOM diffing mechanism.

---

## 🧠 Why This Project Stands Out

This project is more than a simple recipe search tool. It demonstrates deep understanding of:

* **MVC Architecture**: Clean separation of concerns between logic (Model), UI (Views), and application flow (Controller).
* **Asynchronous JavaScript**: Uses modern async/await syntax to manage API requests.
* **State Management**: Implements a custom state management system without Redux.
* **Reusable UI Components**: All views are encapsulated in ES6 classes, ensuring scalability.
* **Optimized DOM Manipulation**: Minimal DOM operations for performance optimization.

Perfect for junior developers looking to prove their frontend architecture, JavaScript, and UX/UI skills in a real-world, production-like environment.

---

## 📦 Tech Stack

* JavaScript (ES6+)
* HTML5 & CSS3 (SCSS with Parcel bundler)
* Forkify API (Public API)
* Parcel v2 (Bundler)
* Core-js and Regenerator-runtime (Polyfilling)

---

## 🧭 Architecture Overview

Forkify follows the **MVC Pattern**:

* **Model (`model.js`)**:

  * Fetches and processes data from the API.
  * Stores application state: current recipe, search results, pagination, and bookmarks.
  * Handles business logic like updating servings and managing localStorage.

* **View (`views/*.js`)**:

  * Contains classes like `RecipeView`, `ResultsView`, `BookmarksView`, etc.
  * Manages DOM rendering and user interaction events.
  * Includes reusable methods to update UI efficiently.

* **Controller (`controller.js`)**:

  * Orchestrates the app logic.
  * Handles event listeners and bridges between model and views.

---

## 🔄 Data & Interaction Flow

**User Search → Display Results → Select Recipe → Bookmark / Adjust → Upload Custom Recipe**

Each user action (search, click, paginate, upload) triggers a controller function that:

1. Updates the state in the model.
2. Notifies relevant views to update.
3. Re-renders only necessary parts of the UI.

This behavior is illustrated through the diagrams (see `/docs/` folder or screenshots below).

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
$ git clone https://github.com/zdvman/forkify.git
$ cd forkify

# 2. Install dependencies
$ npm install

# 3. Run locally
$ npm start

# 4. Build for production
$ npm run build
```

---

## 📸 UI Preview

![image](https://github.com/user-attachments/assets/4f49179b-904a-4139-ab12-88e02ef4aadc)

![image](https://github.com/user-attachments/assets/d4d081ee-d6eb-4007-b70c-5ede85ea76a2)

![image](https://github.com/user-attachments/assets/b4074870-99e6-44a7-8a42-2eb92c9423a2)

---

## 🧪 Recipe Upload Format

Ingredients must follow the format: `Quantity,Unit,Description`. Example:

```
1,kg,Flour
0.5,,Salt
,ml,Water
```

---

## 📚 Credits

This project is based on the [JavaScript Course by Jonas Schmedtmann](https://www.udemy.com/course/the-complete-javascript-course/). It has been extended and modernized with additional features and UX polish by [Dmytro Zuiev](https://dmytrozuiev.com).

---

## 👨‍💻 Author

**Dmytro Zuiev**
Fullstack JavaScript Developer
📍 Austria | 🌐 [Portfolio](https://dmytrozuiev.com) | 🐙 [GitHub](https://github.com/zdvman)

---

## 📄 License

This project is licensed under the ISC License.
Feel free to use it in your portfolio or as a learning resource.

---
