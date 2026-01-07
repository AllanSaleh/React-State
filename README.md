# 🧠 In-Class Practice: Simple Quiz Tracker

## 🎯 What this practices
- `useState` with numbers  
- `useState` with text  
- Button click handling  
- Controlled inputs  
- Form submission and state reset  

---

## 📌 Instructions

Create **ONE React component** called `QuizTracker`.

---

## 🧩 Part 1: Quiz Score

1. Create a state variable called `score` that starts at `0`
2. Display:
Quiz Score: X
3. Add the following buttons:
- **Correct Answer (+1)**
- **Wrong Answer (-1)**
- **Reset Score**

**Rule:**  
- The score **cannot go below 0**

---

## 🧩 Part 2: Student Info

Add a form with the following inputs:

- Student Name (text)
- Quiz Topic (text)

Each input must:
- Use `useState`
- Be a controlled input (`value` and `onChange`)

---

## 🧩 Form Behavior

When the form is submitted:

1. Prevent the page from refreshing
2. Log the following to the console:
Quiz Submitted
Name: ___
Topic: ___
Final Score: ___
3. Clear both text inputs
4. Reset the score back to `0`

---

## 🧩 Expected UI Layout

Quiz Score: 2
[ Correct Answer ] [ Wrong Answer ] [ Reset Score ]
Student Name: []
Quiz Topic: []

[ Submit Quiz ]


---

## 💡 Helpful Hints

- Use `useState(0)` for number state
- Use `useState("")` for text state
- Use `if (score > 0)` before subtracting
- Use `event.preventDefault()` inside `onSubmit`

---

## 🌟 Optional Bonus

- Disable the submit button if name or topic is empty
- Show an alert after submission:
Quiz submitted successfully!
