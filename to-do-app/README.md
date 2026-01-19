# 📝 React Todo App (TypeScript)

A logic-focused Todo application built with **React and TypeScript**, designed to practise real-world state management rather than relying on copy-paste patterns or external libraries.

This project emphasises **immutable updates, derived state, and clean component logic**, which are essential skills for production React and technical interviews.

---

## ✨ Features

- Add new todos
- Mark todos as completed
- Delete todos
- Filter todos by:
  - All
  - Completed
  - Pending
- Persist todos using `localStorage`
- Fully typed with TypeScript

---

## 🧠 What This Project Teaches

- Strong typing with React + TypeScript
- Managing state using `useState`
- Updating arrays immutably using `map` and `filter`
- Creating **derived state** instead of duplicating data
- Controlled form inputs
- Syncing state with `localStorage` using `useEffect`
- Writing predictable, maintainable React logic

---

## 🔄 Core Logic Overview

- Todos are stored as a **typed array** in component state
- All state updates follow **immutable patterns** using `map` and `filter`
- Filtering logic is **derived from state**, not stored separately
- The UI is rendered entirely based on state, with no manual DOM manipulation
- Business logic is clearly separated from presentation components

---

## 💾 Local Storage Persistence

- Todos are automatically saved to `localStorage` on every state update
- Stored todos are restored when the application loads
- State synchronisation with `localStorage` is handled using `useEffect`


