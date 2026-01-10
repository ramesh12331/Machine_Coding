# 📁 React File Explorer / VS Code Sidebar (Microsoft, Atlassian)

## 📌 Project Overview

This project implements a **File Explorer UI similar to the VS Code sidebar**, a **frequently asked frontend interview question** at companies like **Microsoft and Atlassian**.

In addition to basic expand/collapse functionality, this version also supports:

* ➕ **Adding folders dynamically**
* ❌ **Deleting files/folders**

The problem deeply tests **recursive rendering, state management, immutability, and tree manipulation in JavaScript**.

---

## 🎯 What You’ll Learn

* How to build a **collapsible tree view** using React
* How recursive components work in real UI problems
* How to **add and delete nodes** in a nested data structure
* Managing complex state updates immutably
* Writing scalable, interview-level React components

---

## 🧩 Components & Files Used

* `FileExplorer.jsx` – Main container component
* `List.jsx` (inline) – Recursive tree renderer
* `data.json` – Nested file/folder structure

---

## 🗂️ Data Structure (Tree / Nested JSON)

**Definition:**
A hierarchical data structure where each node can optionally contain children.

**Example:**

```json
{
  "id": "3",
  "name": "src",
  "isFolder": true,
  "children": []
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
Manages local component state.

**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Example from this project:**

```js
const [data, setData] = useState(json);
const [isExpanded, setIsExpanded] = useState({});
```

---

### 3️⃣ Recursive Component Rendering (Core Interview Topic)

**Definition:**
A component that renders itself to handle nested data.

**Syntax:**

```js
<Component data={childData} />
```

**Example from this project:**

```js
{isExpanded[node.name] && node.children && (
  <List list={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />
)}
```

---

### 4️⃣ Conditional Rendering

**Definition:**
Render UI elements only when a condition is true.

**Syntax:**

```js
condition && <Component />
```

**Example from this project:**

```js
{node.isFolder && <span className="btn">+</span>}
```

---

## 🟨 JavaScript Concepts Used (Definition + Syntax + Example)

---

### 5️⃣ Objects as State (Expand / Collapse)

**Definition:**
Objects are used to track UI state for multiple dynamic nodes.

**Syntax:**

```js
{ [key]: boolean }
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
Creates shallow copies of arrays or objects.

**Syntax:**

```js
{ ...obj, newKey: value }
```

**Example from this project:**

```js
children: [...node.children, newNode]
```

---

### 7️⃣ Array `map()`

**Definition:**
Transforms arrays and returns a new array.

**Syntax:**

```js
array.map(item => newItem)
```

**Example from this project:**

```js
list.map(node => ({ ...node }))
```

---

### 8️⃣ Array `filter()`

**Definition:**
Removes elements that don’t match a condition.

**Syntax:**

```js
array.filter(item => condition)
```

**Example from this project:**

```js
list.filter(node => node.id !== itemId)
```

---

### 9️⃣ Recursion in JavaScript

**Definition:**
A function calling itself to traverse nested structures.

**Syntax:**

```js
function recurse(data) {
  return recurse(data.children);
}
```

**Example from this project:**

```js
if (node.children) {
  return { ...node, children: updateTree(node.children) };
}
```

---

### 🔟 Immutability

**Definition:**
State should never be mutated directly.

**Syntax:**

```js
setState(prev => [...prev])
```

**Example from this project:**

```js
setData(prev => updateTree(prev))
```

---

## ➕ Add Folder Logic (Explained)

```js
const addNodeToList = (parentId) => {
  const name = prompt("Enter Name");

  const updateTree = (list) => {
    return list.map(node => {
      if (node.id === parentId) {
        return {
          ...node,
          children: [...node.children, newNode]
        };
      }
      if (node.children) {
        return { ...node, children: updateTree(node.children) };
      }
      return node;
    });
  };

  setData(prev => updateTree(prev));
};
```

---

## ❌ Delete Node Logic (Explained)

```js
const deleteNodeFromList = (itemId) => {
  const updateTree = (list) => {
    return list
      .filter(node => node.id !== itemId)
      .map(node => node.children
        ? { ...node, children: updateTree(node.children) }
        : node
      );
  };

  setData(prev => updateTree(prev));
};
```

---

## 🧠 Interview Talking Points

You should be able to explain:

* How recursion works in React
* How tree updates are handled immutably
* Why object-based expand state is required
* Time complexity: `O(n)` per update
* How to scale this to large file systems

---

## 🚀 Possible Enhancements

* Add file creation support
* Rename file/folder
* Drag & drop reordering
* Keyboard navigation
* Convert to controlled tree component

---

## 🧾 Final Summary

This File Explorer project demonstrates:

* Recursive React components
* Advanced JavaScript tree manipulation
* Add / delete operations in nested data
* Real-world UI problem solving

💡 **A must-know project for frontend interviews at Microsoft, Atlassian, and other top tech companies.**

---

✨ Ideal for machine coding rounds, frontend interviews, and portfolio projects.
