# 🚀 Dev Stack

Dev Stack is a responsive web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies and add their preferred technologies to a personal stack.

## 🌐 Live Website

https://dev-stack-beryl-ten.vercel.app/

## 📦 GitHub Repository

https://github.com/atiurcodes/dev-stack

---

## ✨ Features

* 🔎 **Explore Technologies** — Browse different frontend, backend, database, language, styling, DevOps, and tools technologies.
* 🧩 **Build Your Stack** — Add technologies to your personal stack and remove them whenever needed.
* 📱 **Fully Responsive** — Designed to work smoothly across mobile, tablet, and desktop devices.

---

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React-Toastify
* React Icons
* JSON
* Vite

---

## 📋 Project Overview

Dev Stack allows users to explore a collection of development technologies and learn basic information about each technology, including its category, difficulty level, rating, description, and badge.

Users can add technologies to the **Your Stack** section. A technology cannot be added more than once, and users can remove individual technologies or clear the entire stack.

The technology data is stored in a JSON file and loaded dynamically into the application.

---

# 📚 Questions & Answers

## 1. What is JSX, and why do we use it?

JSX stands for **JavaScript XML**. It allows us to write HTML-like syntax inside JavaScript or TypeScript code.

We use JSX in React because it makes UI code easier to read and understand. It also allows us to combine JavaScript logic with UI structure in the same component.

## 2. What is the difference between Props and State?

**Props** are data passed from a parent component to a child component. They are read-only from the child's perspective.

**State** is data managed inside a component that can change over time and cause the component to re-render.

## 3. What is the useState hook, and where do we use it?

`useState` is a React Hook used to create and manage state inside a functional component.

When a user updates it's value, the state is updated and React automatically re-renders the related UI.


## 4. What is the useEffect hook, and why is it useful for loading JSON data?

`useEffect` is a React Hook used to perform side effects in a component, such as fetching data, interacting with APIs, or subscribing to external resources.

When JSON data needs to be fetched after a component renders, `useEffect` can be used to perform that operation.

## 5. Why do we need a unique key when rendering a list using map()?

React needs a unique `key` to identify each item in a list.

A unique key helps React understand which items have been added, removed, or changed, so it can update the UI efficiently.

## 6. What is conditional rendering? Give an example.

Conditional rendering means displaying different UI based on a condition.

For example, in the **Your Stack** section, if there are no selected technologies, an empty message is displayed. Otherwise, the selected technologies are shown.

```tsx
{selectedTechnologies.length === 0 ? (
    <p>Your stack is empty.</p>
) : (
    selectedTechnologies.map(technology => (
        <SelectedTechnologiesCard
            key={technology.id}
            selectedTechnology={technology}
        />
    ))
)}
```

## 7. How can you pass data from a parent component to a child component? How can you pass data from child to parent?

A parent component can pass data to a child component using **props**.

To communicate from child to parent, the parent can pass a **callback function** to the child through props.

The child can then call that function when an event happens.

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── AvailableTechnologies.tsx
│   ├── AvailableTechnologiesCard.tsx
│   ├── SelectedTechnologies.tsx
│   ├── SelectedTechnologiesCard.tsx
│   ├── Navbar.tsx
│   ├── Banner.tsx
│   └── Footer.tsx
├── constants/
├── data/
├── Technologies.tsx
├── TechnologiesType.ts
└── main.tsx
```

## 🎯 Main Functionalities

### Add to Stack

Users can add a technology to their stack by clicking **Add to Stack**.

Once a technology has been added:

* The button becomes disabled.
* The button shows **Added to Stack**.
* A success toast notification is displayed.
* The same technology cannot be added again.

### Remove Technology

Users can remove an individual technology from their stack using the `✕` button.

### Remove All

The **Remove All** button clears all selected technologies from the stack.

### Responsive Design

The application adapts its layout for:

* 📱 Mobile
* 💻 Tablet
* 🖥️ Desktop

---

## 👨‍💻 Author

**Atiur Rahman**

Aspiring Full-Stack AI Web Engineer

* GitHub: https://github.com/atiurcodes
* LinkedIn: https://www.linkedin.com/in/atiur-rahman-71222a429/

---

## 📄 License

This project was created for educational and portfolio purposes.
