# Multi-Tab Form in React

## 📌 Project Overview

This project demonstrates a **scalable, maintainable multi-tab form** built with **React functional components and hooks**. It simulates a real-world **machine coding interview problem**, where form data is collected across multiple tabs with **validation, state persistence, and final submission**.

The form consists of three tabs:

* **Profile**
* **Interests**
* **Settings**

Each tab manages a specific section of the form, while the parent component (`TabForm`) centrally controls state, navigation, and validation.

---

## 🧩 Folder Structure

```
src/
 ├── TabForm.jsx
 ├── Profile.jsx
 ├── Interests.jsx
 ├── Settings.jsx
```

---

## 🛠️ Core Concepts (Canvas / Config-Driven Approach)

This project uses a **configuration-driven (canvas-like) architecture** where:

* Tabs are defined using a **configuration array**
* Each tab defines:

  * `name`
  * `component`
  * `validate()` function (optional)

This makes the solution **extensible**—new tabs can be added without modifying core navigation logic.

---

## 📐 Syntax & Key Patterns

### 1️⃣ Tab Configuration (Canvas Definition)

```js
const tabs = [
  {
    name: "Profile",
    component: Profile,
    validate: () => { ... }
  },
  {
    name: "Interests",
    component: Interests,
    validate: () => { ... }
  },
  {
    name: "Settings",
    component: Settings
  }
];
```

✅ **Why this matters**:

* Single source of truth for tabs
* Easy to scale (add/remove tabs)
* Improves maintainability

---

### 2️⃣ Centralized State Management

```js
const [data, setData] = useState({
  name: "Akshay",
  age: "29",
  email: "akshay@gmail.com",
  interests: ["coding", "music", "javaScript"],
  theme: "dark"
});
```

✔ Shared across all tabs
✔ Data persists when switching tabs

---

### 3️⃣ Dynamic Component Rendering

```js
const ActiveTabComponent = tabs[activeTab].component;

<ActiveTabComponent
  data={data}
  setData={setData}
  errors={errors}
/>
```

🧠 This avoids conditional rendering (`if/else` or `switch`) and keeps the UI clean.

---

### 4️⃣ Validation Per Tab

Each tab handles its own validation logic:

```js
validate: () => {
  const err = {};
  if (!data.name || data.name.length < 2) err.name = "Name is not valid";
  setErrors(err);
  return Object.keys(err).length === 0;
}
```

✔ Validation runs before navigation
✔ Errors are scoped per tab

---

### 5️⃣ Navigation Logic

```js
const handleNextClick = () => {
  if (tabs[activeTab].validate()) {
    setActiveTab(prev => prev + 1);
  }
};
```

🔒 Prevents moving forward unless current tab is valid

---

### 6️⃣ Controlled Form Components

Example from `Profile.jsx`:

```js
<input
  type="text"
  value={name}
  onChange={(e) => handleDataChange(e, "name")}
/>
```

✔ Controlled inputs
✔ Single source of truth

---

### 7️⃣ Radio Button Handling (Settings)

```js
<input
  type="radio"
  name="dark"
  checked={theme === "dark"}
  onChange={handleDataChange}
/>
```

✔ Clean and predictable state updates

---

## 📚 Topics Covered (Definitions, Syntax & Examples)

---

### 1️⃣ React Functional Components

**Definition:**
Functional components are JavaScript functions that return JSX. They are the modern standard in React and are simpler, reusable, and easier to test than class components.

**Syntax:**

```js
const ComponentName = () => {
  return <div>Hello</div>;
};
```

**Used In Project:**

* `TabForm`, `Profile`, `Interests`, `Settings`

---

### 2️⃣ `useState` Hook

**Definition:**
`useState` allows functional components to hold and update local state.

**Syntax:**

```js
const [state, setState] = useState(initialValue);
```

**Used In Project:**

```js
const [data, setData] = useState({});
const [activeTab, setActiveTab] = useState(0);
```

---

### 3️⃣ Controlled Forms

**Definition:**
In controlled components, form input values are controlled by React state instead of the DOM.

**Syntax:**

```js
<input value={value} onChange={handleChange} />
```

**Used In Project:**
All inputs (`name`, `age`, `email`, radio buttons) are fully controlled.

---

### 4️⃣ Form Validation

**Definition:**
Form validation ensures user inputs meet required constraints before submission or navigation.

**Syntax:**

```js
if (!value) error.field = "Required";
```

**Used In Project:**

* Validation runs per tab
* Navigation is blocked if validation fails

---

### 5️⃣ Config-driven UI (Canvas Pattern)

**Definition:**
UI behavior is driven by a configuration object instead of hardcoded logic.

**Syntax:**

```js
const tabs = [{ name, component, validate }];
```

**Why It Matters:**

* Easy to add/remove tabs
* No conditional rendering chains

---

### 6️⃣ Dynamic Component Rendering

**Definition:**
Components are rendered dynamically based on runtime values.

**Syntax:**

```js
const Active = tabs[activeTab].component;
<Active />
```

**Used In Project:**
Switches tab UI without `if/else` or `switch`.

---

### 7️⃣ State Lifting

**Definition:**
Moving shared state to the closest common parent so multiple components can access it.

**Used In Project:**

* `data` state is lifted to `TabForm`
* Child tabs update it via `setData`

---

### 8️⃣ Error Handling

**Definition:**
Capturing and displaying validation or logical errors in the UI.

**Syntax:**

```js
{errors.name && <span>{errors.name}</span>}
```

**Used In Project:**

* Errors stored in a dedicated `errors` state
* Displayed inline per field

---

### 9️⃣ Conditional Navigation

**Definition:**
Navigation flow is controlled by conditions such as validation success.

**Syntax:**

```js
if (validate()) setActiveTab(next);
```

**Used In Project:**

* Users can’t proceed without fixing errors

---

### 🔟 Scalable Architecture

**Definition:**
An architecture that supports easy growth with minimal refactoring.

**How This Project Achieves It:**

* Config-driven tabs
* Centralized state
* Decoupled components
* Minimal hardcoded logic

---

## 🚀 How to Extend This Project

You can easily:

* Add a new tab by appending to the `tabs` array
* Plug in API calls on submit
* Replace manual validation with libraries like **Yup** or **React Hook Form**
* Convert to TypeScript for stronger typing

---

## 🧾 Final Summary

This project demonstrates a **clean, interview-ready solution** for building multi-step forms in React. By using a **canvas-style configuration object**, it achieves:

* ✅ High scalability
* ✅ Clear separation of concerns
* ✅ Minimal conditional logic
* ✅ Maintainable and readable code

It closely mirrors real-world frontend challenges and reflects best practices expected in **mid-to-senior frontend interviews**.

---

✨ Ideal for machine coding rounds, system design discussions, and production-ready UI patterns.
