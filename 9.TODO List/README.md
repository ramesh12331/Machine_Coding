# ✅ React Todo List Component (Interview Ready)

## 📌 Project Overview

This project implements a **Todo List component in React**, one of the **most fundamental and frequently asked frontend interview questions**.

Despite appearing simple, this problem evaluates **React state management, immutability, event handling, conditional rendering, and edge-case handling** — all core frontend skills.

---

## 🎯 Features Implemented

* ➕ Add a new todo item
* ✅ Mark a todo as completed
* ❌ Delete a todo item
* 👀 View the list of all todos
* ✂️ Completed todos appear with a strikethrough

---

## 📋 Requirements Covered

✔ Todo list maintained in component state
✔ Each todo has `id`, `text`, and `completed` flag
✔ Input with placeholder `"Enter todo"`
✔ `Add` button to create todo
✔ Checkbox to toggle completion
✔ `Delete` button per todo
✔ UI updates immediately on every action

---

## ⚠️ Constraints & Edge Cases Handled

* Prevents empty or whitespace-only todos (`trim()`)
* Allows duplicate todo text (case-insensitive duplicates allowed)
* Deleting one todo does not affect others
* UI stays in sync with state

---

## 🧩 Component Used

* `TodoList.jsx` – Complete Todo List logic

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
const TodoList = () => {
  return <div />;
};
```

---

### 2️⃣ `useState` Hook

**Definition:**
Manages local state in functional components.

**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Example from this project:**

```js
const [input, setInput] = useState("");
const [todoList, setTodoList] = useState([]);
```

---

### 3️⃣ Controlled Inputs

**Definition:**
Input values are controlled by React state.

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

### 4️⃣ Event Handling

**Definition:**
React uses event handlers to respond to user actions.

**Syntax:**

```js
<button onClick={handler}>Click</button>
```

**Example from this project:**

```js
<button onClick={addTodoItem}>Add</button>
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

---

### 5️⃣ String Validation (`trim()`)

**Definition:**
Removes leading and trailing whitespace from strings.

**Syntax:**

```js
string.trim();
```

**Example from this project:**

```js
if (input.trim() === "") return;
```

---

### 6️⃣ Array `map()` (Toggle Completion)

**Definition:**
Transforms array elements into new values.

**Syntax:**

```js
array.map(item => newItem);
```

**Example from this project:**

```js
// Update todo list by toggling completed status of a specific item
setTodoList(
  todoList.map(t =>
    // Check if this is the todo we want to update
    t.id === id
      ? {
          ...t, 
          // Copy all existing properties of the todo

          completed: !t.completed 
          // Toggle completed:
          // true → false
          // false → true
        }
      : t
      // If not the matching todo, return it unchanged
  )
);
```

---

### 7️⃣ Array `filter()` (Delete Todo)

**Definition:**
Removes items that don’t satisfy a condition.

**Syntax:**

```js
array.filter(item => condition);
```

**Example from this project:**

```js
setTodoList(todoList.filter(t => t.id !== id));
```

---

### 8️⃣ Object Spread Operator (`...`)

**Definition:**
Creates a shallow copy of an object.

**Syntax:**

```js
{ ...object, key: value }
```

**Example from this project:**

```js
{ ...t, completed: !t.completed }
```

---

### 9️⃣ Immutability

**Definition:**
State should never be mutated directly. Always return a new array or object.

**Why Important:**

* Ensures predictable UI updates
* Helps React detect changes efficiently

**Syntax:**

```js
// ❌ Wrong
state.push(item);

// ✅ Correct
setState(prev => [...prev, item]);
```

**Examples from this project:**

```js
setTodoList(prev => [...prev, item]);
setTodoList(todoList.filter(t => t.id !== id));
```

---

## 🧠 Interview Talking Points

You should be able to explain:

* Why immutability is important in React
* Difference between `map()` and `filter()`
* Why controlled inputs are preferred
* Time complexity:

  * Add → `O(1)`
  * Toggle → `O(n)`
  * Delete → `O(n)`

---

## 🐞 Potential Improvements (Interview Follow-Ups)

* Use UUID instead of index-based IDs
* Persist todos in `localStorage`
* Add edit todo feature
* Add filters (All / Active / Completed)
* Keyboard support (Enter to add)

---

## 🧾 Final Summary

This Todo List implementation demonstrates:

* Core React fundamentals
* Clean state updates with immutability
* Practical JavaScript array operations
* Real-world UI behavior

💡 **A must-master component for every frontend developer and interview candidate.**

---

✨ Ideal for beginner to intermediate frontend interviews and machine coding rounds.
