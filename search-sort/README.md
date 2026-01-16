## 📌 React Interview Task: Search + Filter + Sort (Users List)
Question

You are given an array of users:

[
  { name: "Alice", age: 25, city: "London" },
  { name: "Bob", age: 32, city: "Manchester" },
  { name: "Charlie", age: 29, city: "Birmingham" }
]


Build a React component that allows the user to:

Search by name

Filter by city

Sort by age (ascending/descending)

# Requirements

Use a controlled input for the search field

Use a select dropdown for choosing the city filter

Use buttons or a toggle to sort by age

Use derived state instead of mutating arrays

Keep the original data untouched

Use useMemo to compute filtered + sorted results efficiently

# What the Interviewer Wants to See

Clear and well-structured component state

Separation between UI controls and list rendering

Pure, predictable search, filter and sort logic

Correct use of useState, useMemo, and derived values

No direct mutation of the original array

Clean naming, readable logic and maintainable code

# How You Should Explain Your Approach

“I keep the original array in state and never mutate it.”

“I use separate state variables for searchTerm, selectedCity and sortOrder.”

“I compute filtered and sorted results in a useMemo so it recalculates only when inputs change.”

“I perform case-insensitive search using .toLowerCase().includes().”

“I apply city filtering only when a city is selected.”

“I sort by age using .sort() on a copied array, not on the original.”