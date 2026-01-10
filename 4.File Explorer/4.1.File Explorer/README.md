# 📁 React File Explorer / VS Code Sidebar (Microsoft, Atlassian)

## 📌 Project Overview

This project implements a **File Explorer UI similar to the VS Code sidebar**, a **popular frontend interview question** asked at companies like **Microsoft and Atlassian**.

The UI displays a **nested file–folder structure** with support for:

* Expanding and collapsing folders
* Rendering recursive tree structures
* Managing UI state per folder

This problem strongly tests **React recursion, state management, JavaScript data structures, and UI design thinking**.

---

## 🎯 What You’ll Learn

* How to build a **collapsible tree view** in React
* How recursion works in React components
* How to manage expand/collapse state correctly
* Handling nested JSON data
* Writing scalable, interview-ready UI components

---

## 🧩 Components Used

* `FileExplorer.jsx` – Parent container
* `List` – Recursive tree component
* `data.json` – Nested file/folder structure

---

## 🗂️ Data Structure (Nested JSON)

**Definition:**
A hierarchical tree-like data structure where each node can have children.

**Example (`data.json`):**

```json
{
  "id": "3",
  "name": "src",
  "isFolder": true,
  "children": [
    {
      "id": "7",
      "name": "App.js",
      "isFolder": false
    }
  ]
}
```

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
const FileExplorer = () => {
  return <List list={data} />;
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
const [isExpanded, setIsExpanded] = useState({});
```

---

### 3️⃣ Recursive Component Rendering (Core Interview Topic)

**Definition:**
A component that renders itself to handle nested data structures.

**Syntax:**

```js
<Component data={childData} />
```

**Example from this project:**

```js
{isExpanded[node.name] && node.children && (
  <List list={node.children} />
)}
```

🧠 **Interview Tip:** This is the heart of file explorers, comment threads, and menus.

---

### 4️⃣ Conditional Rendering

**Definition:**
Render UI elements based on conditions.

**Syntax:**

```js
condition && <Component />
```

**Example from this project:**

```js
{node.isFolder && <span>+</span>}
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

---

### 5️⃣ Objects as State (Key-Value Mapping)

**Definition:**
Using objects to track state for multiple dynamic items.

**Syntax:**

```js
{ [key]: value }
```

**Example from this project:**

```js
setIsExpanded(prev => ({
  ...prev,
  [node.name]: !prev[node.name]
}))
```

---

### 6️⃣ Spread Operator (`...`)

**Definition:**
Creates a shallow copy of objects or arrays.

**Syntax:**

```js
{ ...oldObject, newKey: value }
```

**Example from this project:**

```js
{ ...prev, [node.name]: true }
```

---

### 7️⃣ Array `map()`

**Definition:**
Iterates over arrays to render UI elements.

**Syntax:**

```js
array.map(item => JSX)
```

**Example from this project:**

```js
list.map((node) => (
  <div key={node.id}>{node.name}</div>
))
```

---

### 8️⃣ Optional Chaining (`?.`)

**Definition:**
Safely accesses nested object properties.

**Syntax:**

```js
object?.property
```

**Example from this project:**

```js
node?.children
```

---

### 9️⃣ Immutability

**Definition:**
State should never be mutated directly.

**Syntax:**

```js
setState(prev => ({ ...prev }))
```

**Example from this project:**

```js
setIsExpanded(prev => ({ ...prev }))
```

---

## 🐞 Common Interview Pitfall (Explained)

### ❌ Wrong Approach

Using a single boolean state causes **all folders to expand together**.

```js
const [isExpanded, setIsExpanded] = useState(false);
```

### ✅ Correct Approach

Use an object keyed by folder name or id.

```js
const [isExpanded, setIsExpanded] = useState({});
```

🧠 **Interviewers love this fix.**

---

## 🔁 Recursive Component Rendering vs Higher-Order Components (HOC)

This comparison is **frequently asked in frontend interviews**, especially after problems like File Explorer.

---

### 🔹 Recursive Component Rendering

**Definition:**
A component that **renders itself** to handle **nested or hierarchical data** structures.

**Typical Use Cases:**

* File Explorer / Folder Tree
* Nested comments
* Menus with sub-menus

**Syntax (from this project):**

```js
{isExpanded[node.name] && node.children && (
  <List list={node.children} />
)}
```

**Key Characteristics:**

* Same component calls itself
* Best for **tree-like data**
* Depth can be unlimited
* UI structure mirrors data structure

---

### 🔹 Higher-Order Component (HOC)

**Definition:**
A Higher-Order Component is a **function that takes a component and returns a new enhanced component**.

**Typical Use Cases:**

* Code reuse
* Authentication
* Logging
* Data fetching

**Syntax (generic example):**

```js
const withAuth = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};
```

**Key Characteristics:**

* Component logic reuse
* Does NOT render nested UI
* Used for cross-cutting concerns

---

### 🆚 Key Differences (Interview Gold)

| Feature              | Recursive Rendering    | Higher-Order Component     |
| -------------------- | ---------------------- | -------------------------- |
| Purpose              | Render nested UI       | Reuse logic                |
| Pattern              | Component calls itself | Function returns component |
| Data Shape           | Tree / hierarchical    | Flat / independent         |
| UI Depth             | Unlimited nesting      | No nesting                 |
| Used In This Project | ✅ Yes                  | ❌ No                       |

---

### 🧠 How to Explain in an Interview

> “Recursive components are used when UI mirrors hierarchical data, like a file explorer. HOCs are used to reuse logic across components, such as authentication or logging. They solve completely different problems.”

---

## 🧠 Interview Talking Points

You should be able to explain:

* How recursion works in React
* Why object-based state is required
* How expand/collapse logic is managed
* Time complexity: `O(n)` traversal
* How this scales to large file systems

---

## 🚀 Possible Enhancements

* Add file/folder icons
* Add create / delete file & folder
* Add rename functionality
* Keyboard navigation
* Convert to controlled tree component

---

## 🧾 Final Summary

This File Explorer project demonstrates:

* Recursive React components
* Advanced state management
* Strong JavaScript fundamentals
* Real-world UI problem solving

💡 **A must-know component for frontend interviews at Microsoft, Atlassian, and other top tech companies.**

---

✨ Ideal for machine coding rounds, frontend interviews, and portfolio projects.
