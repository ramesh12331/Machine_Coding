# 🔍 React Autocomplete Search Bar (Amazon, Ola)

## 📌 Project Overview

This project implements a **React Autocomplete Search Bar**, a **very common frontend interview question** asked by companies like **Amazon, Ola, Flipkart, and Swiggy**.

The component dynamically fetches and displays suggestions as the user types, while applying **debouncing** to optimize API calls. It tests a candidate’s understanding of **React hooks, JavaScript fundamentals, UI state management, and performance optimization**.

---

## 🎯 What You’ll Learn

* How to build an autocomplete component from scratch in React
* How debouncing works using `setTimeout` and `useEffect`
* Handling controlled inputs and dropdown UI
* Writing interview-ready, scalable React code
* Applying core JavaScript concepts in real UI problems

---

## 🧩 Component Used

* `AutoSearch.jsx` – Main autocomplete search component

---

## ⚛️ React Concepts Used (Definition + Syntax + Example)

### 1️⃣ Functional Components

**Definition:**
A functional component is a JavaScript function that returns JSX.

**Syntax:**

```js
const Component = () => {
  return <div />;
};
```

**Example from this project:**

```js
const AutoSearch = () => {
  return <div className="container" />;
};
```

---

### 2️⃣ `useState` Hook

**Definition:**
`useState` is used to create and manage state in functional components.

**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Example from this project:**

```js
const [input, setInput] = useState("");
const [results, setResult] = useState([]);
const [showResults, setShowResuts] = useState(false);
```

---

### 3️⃣ `useEffect` Hook

**Definition:**
`useEffect` runs side effects such as API calls when dependencies change.

**Syntax:**

```js
useEffect(() => {
  // side effect
}, [dependency]);
```

**Example from this project:**

```js
useEffect(() => {
  const timer = setTimeout(fetchData, 300);
  return () => clearTimeout(timer);
}, [input]);
```

---

### 4️⃣ Controlled Input

**Definition:**
A controlled input gets its value from React state.

**Syntax:**

```js
<input value={state} onChange={handler} />
```

**Example from this project:**

```js
<input
  type="text"
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>
```

---

### 5️⃣ Conditional Rendering

**Definition:**
Render UI elements only when conditions are true.

**Syntax:**

```js
condition && <Component />
```

**Example from this project:**

```js
{showResults && results.length > 0 && (
  <div className="results-container">...</div>
)}
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

### 6️⃣ Debouncing

**Definition:**
Limits how often a function executes while typing.

**Syntax:**

```js
let timer;
function debounce(fn, delay) {
  clearTimeout(timer);
  timer = setTimeout(fn, delay);
}
```

**Example from this project:**

```js
useEffect(() => {
  const timer = setTimeout(fetchData, 300);
  return () => clearTimeout(timer);
}, [input]);
```

**Why Important:**
Prevents unnecessary API requests on every keystroke.

---

### 7️⃣ `fetch` API & `async/await`

**Definition:**
Used to fetch data asynchronously from an external API.

**Syntax:**

```js
const response = await fetch(url);
const data = await response.json();
```

**Example from this project:**

```js
const fetchData = async () => {
  const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
  const json = await data.json();
  setResult(json.recipes);
};
```

---

### 8️⃣ Template Literals

**Definition:**
Allows embedding variables inside strings.

**Syntax:**

```js
`string ${variable}`
```

**Example from this project:**

```js
`https://dummyjson.com/recipes/search?q=${input}`
```

---

### 9️⃣ Array `map()`

**Definition:**
Transforms array items into JSX elements.

**Syntax:**

```js
array.map((item, index) => newItem)
```

**Example from this project:**

```js
results.map((r) => (
  <span key={r.id} className="results">{r.name}</span>
))
```

---

### 🔟 Closures

**Definition:**
Functions remember variables from their outer scope even after execution.

**Syntax:**

```js
function outer() {
  let value = 10;
  return function inner() {
    console.log(value);
  };
}
```

**Example from this project:**

```js
setTimeout(fetchData, 300);
```

The `fetchData` function remembers the latest `input` value.

---

### 1️⃣1️⃣ Immutability

**Definition:**
State should never be mutated directly.

**Syntax:**

```js
// ❌ Wrong
state.push(item);

// ✅ Correct
setState([...state, item]);
```

**Example from this project:**

```js
setResult(json.recipes);
```

**Definition:**
State is never mutated directly.

**Used Here:**
New results arrays are created and set using `setResult`.

---

## 🧠 Interview Talking Points

You should be able to explain:

* How autocomplete works internally
* Why debouncing is required
* Difference between client-side & server-side autocomplete
* How to optimize this for large datasets
* Time complexity of rendering results (`O(n)`)

---

## 🐞 Edge Cases & Improvements

* Fix `onBlur` to correctly hide dropdown (`setShowResults(false)`)
* Add keyboard navigation (↑ ↓ Enter)
* Cache previous search results
* Add accessibility (ARIA roles)
* Highlight matched text

---

## 🧾 Final Summary

This Autocomplete Search Bar demonstrates:

* Strong React fundamentals
* Core JavaScript problem-solving skills
* UI state management
* Performance optimization using debouncing

💡 **Mastering this problem significantly improves your chances in frontend interviews at top tech companies like Amazon and Ola.**

---

✨ Ideal for machine coding rounds, frontend interviews, and portfolio projects.
