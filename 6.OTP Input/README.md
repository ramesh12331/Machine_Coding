# 🔐 React OTP Input Component (Flipkart, Swiggy, Myntra)

## 📌 Project Overview

This project implements a **multi-field OTP (One-Time Password) Input Component in React**, a **frequently asked frontend interview question** at companies like **Flipkart, Swiggy, and Myntra**.

The component focuses on **real-world UX behavior**, including:

* Auto-focus management
* Backspace navigation
* Input validation (numbers only)
* Controlled multi-input state handling

This problem tests **React hooks (`useState`, `useRef`, `useEffect`), JavaScript array manipulation, keyboard events, and DOM focus control**.

---

## 🎯 What You’ll Learn

* How to build a **multi-input OTP component** from scratch
* How to manage focus programmatically using `useRef`
* Handling Backspace navigation between inputs
* Validating numeric-only OTP input
* Writing clean, interview-ready React UI logic

---

## 🧩 Component Used

* `App.jsx` – OTP Input component

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
const App = () => {
  return <div className="app" />;
};
```

---

### 2️⃣ `useState` Hook

**Definition:**
`useState` is used to store and update component state.

**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Example from this project:**

```js
const [inputArr, setInputArray] = useState(
  new Array(OTP_DIGITS_COUNT).fill("")
);
```

---

### 3️⃣ `useRef` Hook (Critical for OTP)

**Definition:**
`useRef` provides mutable references to DOM elements without re-rendering.

**Syntax:**

```js
const ref = useRef(initialValue);
```

**Example from this project:**

```js
const refArr = useRef([]);
```

**Used For:**

* Storing input element references
* Managing focus between OTP fields

---

### 4️⃣ `useEffect` Hook

**Definition:**
Runs side effects after component render.

**Syntax:**

```js
useEffect(() => {
  // side effect
}, []);
```

**Example from this project:**

```js
useEffect(() => {
  refArr.current[0]?.focus();
}, []);
```

🧠 **Interview Tip:** Used here to auto-focus the first OTP input.

---

### 5️⃣ Controlled Inputs

**Definition:**
Input values are fully controlled by React state.

**Syntax:**

```js
<input value={state} onChange={handler} />
```

**Example from this project:**

```js
<input
  type="text"
  value={inputArr[index]}
  onChange={(e) => handleOnChange(e.target.value, index)}
/>
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

---

### 6️⃣ Array Initialization

**Definition:**
Creates an array of fixed length with default values.

**Syntax:**

```js
new Array(length).fill(value)
```

**Example from this project:**

```js
new Array(OTP_DIGITS_COUNT).fill("")
```

---

### 7️⃣ Array Copy (Immutability)

**Definition:**
State is updated by creating a new array instead of mutating the old one.

**Syntax:**

```js
const newArr = [...oldArr];
```

**Example from this project:**

```js
const newArr = [...inputArr];
newArr[index] = newValue;
setInputArray(newArr);
```

---

### 8️⃣ Numeric Validation (`isNaN`)

**Definition:**
Checks whether a value is a valid number.

**Syntax:**

```js
isNaN(value)
```

**Example from this project:**

```js
if (isNaN(value)) return;
```

---

### 9️⃣ String Manipulation

**Definition:**
Processes input values before storing them.

**Syntax:**

```js
string.trim();
string.slice(-1);
```

**Example from this project:**

```js
const newValue = value.trim();
newArr[index] = newValue.slice(-1);
```

---

### 🔟 Keyboard Event Handling

**Definition:**
Handles keyboard interactions like Backspace.

**Syntax:**

```js
onKeyDown={(e) => {}}
```

**Example from this project:**

```js
if (!e.target.value && e.key === "Backspace") {
  refArr.current[index - 1]?.focus();
}
```

---

## 🧠 Interview Talking Points

You should be able to explain:

* Why `useRef` is required for OTP inputs
* How focus is managed between inputs
* Why immutability is important for state updates
* How Backspace navigation improves UX
* Time complexity: `O(n)` per OTP update

---

## 🐞 Edge Cases Handled

* Prevents non-numeric input
* Moves focus correctly on Backspace
* Limits each input to one digit
* Auto-focuses first input on load

---

## 🚀 Possible Enhancements

* Paste full OTP support
* Auto-submit when OTP is complete
* Error animation on invalid OTP
* Mobile-friendly numeric keypad

---

## 🧾 Final Summary

This OTP Input implementation demonstrates:

* Strong React hook usage
* Excellent DOM & focus control
* Clean JavaScript array logic
* Real-world UX considerations

💡 **A must-know React component for frontend interviews at Flipkart, Swiggy, Myntra, and other product-based companies.**

---

✨ Ideal for machine coding rounds, frontend interviews, and portfolio projects.
