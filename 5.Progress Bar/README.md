# 📊 React Progress Bar (Google, Uber, Meta)

## 📌 Project Overview

This project implements a **dynamic, animated Progress Bar component in React**, a **frequently asked frontend interview question** at companies like **Google, Uber, and Meta**.

The progress bar smoothly animates based on incoming progress values and demonstrates **React hooks, CSS transforms, accessibility best practices, and clean UI logic**.

---

## 🎯 What You’ll Learn

* How to build an **animated progress bar** in React
* How to handle **prop-driven UI updates**
* Using `useEffect` for animations
* Applying CSS transforms for smooth performance
* Writing **accessible UI components**

---

## 🧩 Components Used

* `ProgressBar.jsx` – Reusable progress bar component
* `App.jsx` – Renders multiple progress bars

---

## ⚛️ React Concepts Used (Definition + Syntax + Example)

---

### 1️⃣ Functional Components

**Definition:**
Functional components are JavaScript functions that return JSX.

**Syntax:**

```js
const Component = () => <div />;
```

**Example from this project:**

```js
const ProgressBar = ({ progress }) => {
  return <div className="outer" />;
};
```

---

### 2️⃣ `useState` Hook

**Definition:**
Stores and updates component state.

**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Example from this project:**

```js
const [animatedProgress, setAnimatedProgress] = useState(0);
```

---

### 3️⃣ `useEffect` Hook

**Definition:**
Handles side effects such as animations or async updates.

**Syntax:**

```js
useEffect(() => {
  // side effect
}, [dependency]);
```

**Example from this project:**

```js
useEffect(() => {
  setTimeout(() => setAnimatedProgress(progress), 100);
}, [progress]);
```

---

### 4️⃣ Props-Driven Rendering

**Definition:**
UI updates automatically when props change.

**Syntax:**

```js
<Component prop={value} />
```

**Example from this project:**

```js
<ProgressBar progress={value} />
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

---

### 5️⃣ `setTimeout`

**Definition:**
Executes a function after a specified delay.

**Syntax:**

```js
setTimeout(callback, delay);
```

**Example from this project:**

```js
setTimeout(() => setAnimatedProgress(progress), 100);
```

---

### 6️⃣ Array `map()`

**Definition:**
Transforms arrays into UI elements.

**Syntax:**

```js
array.map(item => JSX)
```

**Example from this project:**

```js
bars.map((value) => (
  <ProgressBar key={value} progress={value} />
))
```

---

### 7️⃣ Conditional Expressions

**Definition:**
Apply logic directly in JSX.

**Syntax:**

```js
condition ? valueA : valueB
```

**Example from this project:**

```js
color: animatedProgress < 5 ? "black" : "white"
```

---

### 8️⃣ Immutability

**Definition:**
State updates create new values instead of mutating existing ones.

**Syntax:**

```js
setState(newValue);
```

**Example from this project:**

```js
setAnimatedProgress(progress);
```

---

## 🎨 Animation Technique (CSS Transform)

**Why `transform` instead of `width`?**

* Better performance (GPU-accelerated)
* Smoother animations
* Avoids layout reflows

**Used Here:**

```js
transform: `translateX(${animatedProgress - 100}%)`
```

---

## ♿ Accessibility (Interview Bonus)

The component uses **ARIA attributes** to support screen readers:

```html
role="progressbar"
aria-valuenow="progress"
aria-valuemin="0"
aria-valuemax="100"
```

🧠 **Interviewers appreciate accessibility awareness.**

---

## 🧠 Interview Talking Points

You should be able to explain:

* How animation is triggered in React
* Why `useEffect` is required
* Difference between `width` vs `transform`
* How this component stays performant
* How accessibility is handled

---

## 🚀 Possible Enhancements

* Smooth CSS transitions
* Indeterminate progress bar
* Pause / resume animation
* Server-driven progress updates
* Theming support

---

## 🧾 Final Summary

This Progress Bar project demonstrates:

* Strong React fundamentals
* Clean animation logic
* JavaScript event timing
* Accessibility-first UI design

💡 **A must-know UI component for frontend interviews at Google, Uber, Meta, and other top tech companies.**

---

✨ Ideal for machine coding rounds, frontend interviews, and portfolio projects.
