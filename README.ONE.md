# 📘 Common React & JavaScript Interview Topics (Master README)

This README acts as a **single source of truth** for **core React and JavaScript concepts** that repeatedly appear across **frontend interviews, machine coding rounds, and real-world UI problems**.

It is intentionally **framework-agnostic in structure**, so it can be reused across projects like:

* Multi-step forms
* Pagination
* Autocomplete
* Todo apps
* Accordions
* File explorers
* OTP inputs

---

## ⚛️ Common React Topics

---

## 1️⃣ Functional Components

### Definition

Functional components are **JavaScript functions** that return JSX. They are the standard way of building components in modern React.

### Syntax

```js
const Component = () => {
  return <div />;
};
```

### Example

```js
const Header = () => <h1>Hello React</h1>;
```

---

## 2️⃣ JSX (JavaScript XML)

### Definition

JSX allows writing **HTML-like syntax inside JavaScript**, making UI code more readable.

### Syntax

```js
const element = <h1>Hello</h1>;
```

### Example

```js
return <div className="container">Content</div>;
```

---

## 3️⃣ `useState` Hook

### Definition

`useState` allows functional components to **store and update state**.

### Syntax

```js
const [state, setState] = useState(initialValue);
```

### Example

```js
const [count, setCount] = useState(0);
```

---

## 4️⃣ Controlled Components

### Definition

Form elements whose values are **controlled by React state**.

### Syntax

```js
<input value={state} onChange={handler} />
```

### Example

```js
<input value={name} onChange={e => setName(e.target.value)} />
```

---

## 5️⃣ Conditional Rendering

### Definition

Render UI elements based on conditions.

### Syntax

```js
condition && <Component />
```

### Example

```js
{isOpen && <Modal />}
```

---

## 6️⃣ Props

### Definition

Props are used to **pass data from parent to child components**.

### Syntax

```js
<Component prop={value} />
```

### Example

```js
<UserCard name="Akshay" />
```

---

## 7️⃣ `useEffect` Hook

### Definition

Handles **side effects** like API calls, timers, subscriptions.

### Syntax

```js
useEffect(() => {}, [dependencies]);
```

### Example

```js
useEffect(() => {
  fetchData();
}, []);
```

---

## 8️⃣ `useRef` Hook

### Definition

Provides a **mutable reference** to DOM elements without causing re-renders.

### Syntax

```js
const ref = useRef(null);
```

### Example

```js
inputRef.current.focus();
```

---

## 9️⃣ State Lifting

### Definition

Moving shared state to the **closest common parent**.

### Example

Parent stores state → children read/update via props

---

## 🔟 Dynamic Component Rendering

### Definition

Rendering components dynamically based on runtime values.

### Syntax

```js
const Active = config[index].component;
<Active />
```

---

# 🟨 Common JavaScript Topics

---

## 1️⃣ Immutability (CRITICAL)

### Definition

State should **never be mutated directly**. Always create new arrays/objects.

### ❌ Wrong

```js
state.push(item);
```

### ✅ Correct

```js
setState(prev => [...prev, item]);
```

---

## 2️⃣ Array `map()`

### Definition

Transforms array elements into new values.

### Syntax

```js
array.map(item => newItem)
```

### Example

```js
todos.map(todo => <li>{todo.text}</li>)
```

---

## 3️⃣ Array `filter()`

### Definition

Removes items that don’t match a condition.

### Syntax

```js
array.filter(item => condition)
```

### Example

```js
todos.filter(todo => !todo.completed)
```

---

## 4️⃣ Spread Operator (`...`)

### Definition

Creates shallow copies of arrays or objects.

### Syntax

```js
{ ...obj, key: value }
```

---

## 5️⃣ `slice()`

### Definition

Returns a portion of an array **without mutation**.

### Syntax

```js
array.slice(start, end)
```

---

## 6️⃣ Event Handling

### Definition

Handles user actions like click, input, keypress.

### Syntax

```js
onClick={handler}
```

---

## 7️⃣ Keyboard Events

### Definition

Handles keyboard actions such as Enter or Backspace.

### Syntax

```js
onKeyDown={e => {}}
```

---

## 8️⃣ Async / Await

### Definition

Handles asynchronous operations cleanly.

### Syntax

```js
const data = await fetch(url);
```

---

## 9️⃣ Closures

### Definition

Functions remember variables from their outer scope.

### Example

```js
onClick={() => handleClick(index)}
```

---

## 🔟 Debouncing

### Definition

Delays execution until user stops triggering events.

### Syntax

```js
setTimeout(fn, delay);
clearTimeout(timer);
```

---

# 🧠 Common Interview UI Patterns

| Pattern         | Example           |
| --------------- | ----------------- |
| Array state     | Todo, Chips       |
| Object state    | Nested Checkboxes |
| Recursion       | File Explorer     |
| Debouncing      | Autocomplete      |
| Pagination math | Pagination        |
| DOM refs        | OTP Input         |

---

# 🧾 Final Summary

This README covers:

* Core React fundamentals
* Essential JavaScript concepts
* Patterns reused across all frontend interview problems
* Clean syntax and interview explanations

💡 **Mastering these topics prepares you for frontend interviews at Amazon, Flipkart, Google, Meta, Uber, and other top companies.**

---

✨ Use this as a **base README for every React interview project**.
