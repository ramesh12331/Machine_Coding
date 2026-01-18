# 📂 React Accordion Component (Interview Ready)

## 📌 Project Overview

This project implements a **React Accordion component**, a very common **frontend interview question** used to test **state management, conditional rendering, and UI logic**.

An Accordion allows users to **expand and collapse sections of content**, with the constraint that **only one section can be open at a time**.

This pattern is frequently asked in interviews to evaluate **clean React design and edge-case handling**.

---

## 🎯 Features Implemented

* 📋 Displays a list of accordion items (title + content)
* 🔁 Clicking a title toggles its content
* 🚫 Only **one accordion section open at a time**
* 🔽 Clicking an open section collapses it
* ⚠️ Gracefully handles empty or invalid data
* 🎨 Visual indicators using icons (expand / collapse)

---

## 📦 Props Contract

The `Accordion` component accepts an `items` prop.

### Expected Shape

```js
items: Array<{
  title: string,
  content: string
}>
```

### Example Used

```js
const items = [
  {
    title: "JavaScript Basics",
    content: "Learn variables, functions, and loops in JavaScript."
  },
  {
    title: "React.js Overview",
    content: "Understand components, state, and props in React."
  }
];
```

---

## ⚛️ React Concepts Used (Definition + Syntax + Example)

---

### 1️⃣ Functional Components

**Definition:**
A functional component is a JavaScript function that returns JSX.

**Syntax:**

```js
const Component = () => <div />;
```

**Example from this project:**

```js
const Accordion = ({ items }) => {
  return <div />;
};
```

---

### 2️⃣ `useState` Hook

**Definition:**
Used to store and update component state.

**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Example from this project:**

```js
const [openIndex, setOpenIndex] = useState(null);
```

---

### 3️⃣ Conditional Rendering

**Definition:**
Render UI elements only when conditions are met.

**Syntax:**

```js
condition && <Component />
```

**Example from this project:**

```js
{openIndex === index && (
  <div className="acc-dec">{item.content}</div>
)}
```

---

### 4️⃣ Props & Data Flow

**Definition:**
Props are used to pass data from parent to child components.

**Syntax:**

```js
<Component prop={value} />
```

**Example from this project:**

```js
<Accordion items={items} />
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

---

### 5️⃣ Ternary Operator

**Definition:**
Used for inline conditional logic.

**Syntax:**

```js
condition ? valueA : valueB
```

**Example from this project:**

```js
openIndex === index ? <FaChevronUp /> : <FaChevronDown />
```

---

### 6️⃣ Array `map()`

**Definition:**
Iterates over arrays to render UI elements.

**Syntax:**

```js
array.map(item => JSX)
```

**Example from this project:**

```js
items.map((item, index) => (
  <div key={index}>{item.title}</div>
))
```

---

### 7️⃣ Immutability

**Definition:**
React state should never be mutated directly.

**Syntax:**

```js
setState(newValue);
```

**Example from this project:**

```js
setOpenIndex(openIndex === index ? null : index);
```

---

## 🧠 Core Accordion Logic (Explained)

```js
const handleToggle = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
```

### Why This Works

* Clicking the same index closes it
* Clicking a different index opens the new one
* Ensures **only one section is open at a time**

---

## ⚠️ Edge Cases Handled

* Empty `items` array
* Invalid or missing `items` prop

```js
!items || items.length === 0 ? "No items available" : ...
```

---

## 🧠 Interview Talking Points

You should be able to explain:

* Why a single `openIndex` state is sufficient
* How conditional rendering controls visibility
* Why this approach scales efficiently
* Time complexity:

  * Toggle → `O(1)`
  * Render → `O(n)`

---

## 🚀 Possible Enhancements (Interview Follow-ups)

* Allow multiple sections to be open
* Add animation (CSS transitions)
* Keyboard accessibility
* Controlled accordion using props
* Convert to reusable UI library component

---

## 🧾 Final Summary

This Accordion component demonstrates:

* Clean React state management
* Conditional rendering best practices
* Edge-case handling
* Interview-ready UI logic

💡 **A must-know component for frontend interviews and machine coding rounds.**

---

✨ Ideal for frontend interviews, UI libraries, and portfolio projects.
