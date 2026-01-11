# 🏷️ React Chips Input Component (Interview Ready)

## 📌 Project Overview

This project implements a **Chips Input component in React**, a common **frontend interview question** often asked in machine coding rounds and UI-focused interviews.

A Chips Input allows users to enter multiple values (tags/keywords) which are displayed as **removable chips**. This problem evaluates **React state management, keyboard handling, immutability, and UI behavior**.

---

## 🎯 What You’ll Learn

* How to build a dynamic chips/tag input in React
* Handling keyboard events using `onKeyDown`
* Managing list state immutably
* Adding and removing items from UI
* Writing clean, interview-grade React code

---

## ✨ Features Implemented

1. **Text Input Field** – Users can type text into an input field
2. **Add Chip on Enter** – Pressing `Enter` adds a new chip
3. **Whitespace Validation** – Empty or whitespace-only chips are not added
4. **Remove Chip** – Each chip has an `X` button to delete it
5. **Horizontal Display** – Chips are displayed in a flexible horizontal layout
6. **State Persistence** – Chips persist across re-renders

---

## 🧩 Component Used

* `App.jsx` – Contains the full Chips Input logic

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
const [inputText, setInputText] = useState("");
const [chips, setChips] = useState([]);
```

---

### 3️⃣ Controlled Input

**Definition:**
The input value is controlled by React state.

**Syntax:**

```js
<input value={state} onChange={handler} />
```

**Example from this project:**

```js
<input
  type="text"
  value={inputText}
  onChange={(e) => setInputText(e.target.value)}
/>
```

---

### 4️⃣ Event Handling (`onKeyDown`)

**Definition:**
React uses synthetic events to handle user interactions.

**Why `onKeyDown`?**
`onKeyPress` is deprecated; `onKeyDown` is the recommended approach.

**Syntax:**

```js
onKeyDown={(e) => handler(e)}
```

**Example from this project:**

```js
const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    // add chip
  }
};
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

---

### 5️⃣ String Validation (`trim()`)

**Definition:**
Removes whitespace from both ends of a string.

**Syntax:**

```js
string.trim();
```

**Example from this project:**

```js
if (inputText.trim() !== "") {
  setChips(prev => [...prev, inputText]);
}
```

---

### 6️⃣ Array Spread Operator (`...`)

**Definition:**
Creates a new array by copying existing elements.

**Syntax:**

```js
[...oldArray, newItem]
```

**Example from this project:**

```js
setChips(prev => [...prev, inputText]);
```

---

### 7️⃣ Array `map()`

**Definition:**
Transforms array elements into JSX.

**Syntax:**

```js
array.map((item, index) => JSX)
```

**Example from this project:**

```js
chips.map((chip, i) => (
  <span key={i}>{chip}</span>
))
```

---

### 8️⃣ Array `splice()` (Delete Logic)

**Definition:**
Removes elements from an array at a specific index.

**Syntax:**

```js
array.splice(index, count);
```

**Example from this project:**

```js
const copyChips = [...chips];
copyChips.splice(index, 1);
setChips(copyChips);
```

---

### 9️⃣ Immutability

**Definition:**
Immutability means **never modifying existing state directly**. Instead, always create a **new copy** of the state and update that copy.

**Why Important in React:**

* Enables predictable re-renders
* Prevents accidental side effects
* Helps React detect state changes correctly

**Syntax (Generic):**

```js
// ❌ Wrong (mutates state)
state.push(item);
setState(state);

// ✅ Correct (immutable update)
setState(prev => [...prev, item]);
```

**Example from this project:**

```js
// Create a copy before modifying
const copyChips = [...chips];
copyChips.splice(index, 1);
setChips(copyChips);
```

🧠 **Interview Tip:** Always mention immutability when explaining state updates.

---

## 🧠 Interview Talking Points

You should be able to explain:

* Why `onKeyDown` is used instead of `onKeyPress`
* How immutability is maintained while updating state
* How duplicate chips are handled independently
* Time complexity:

  * Add chip → `O(1)`
  * Delete chip → `O(n)`

---

## 🐞 Common Bug to Watch For (Interview Bonus)

❌ **Bug:** Passing wrong argument to delete handler

```js
onClick={(index) => handleDeleteChip(index)}
```

✅ **Correct Fix:**

```js
onClick={() => handleDeleteChip(i)}
```

Interviewers love when you catch this.

---

## 🚀 Possible Enhancements

* Prevent duplicate chips
* Add Backspace-to-delete last chip
* Convert chips to objects with IDs
* Add paste support
* Make component reusable

---

## 🧾 Final Summary

This Chips Input component demonstrates:

* Solid React fundamentals
* Clean keyboard handling
* Immutability-aware state updates
* Real-world UI behavior

💡 **A must-practice component for frontend interviews and machine coding rounds.**

---

✨ Ideal for frontend interviews, UI libraries, and portfolio projects.
