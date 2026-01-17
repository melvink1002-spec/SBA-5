# Task Management App

This app allows users to add tasks with categories, deadlines, and statuses. Tasks can be filtered by status or category and are saved using local storage.

## Features
- Add new tasks
- Update task status
- Automatic overdue detection
- Filter by status or category
- Persistent data with local storage

## Technologies
- HTML
- Javascript
- CSS

Reflection:

One of the main challenges faced during this project was keeping the data in localStorage. At first, I struggled to keep the task list after reloading the page. I solved this by saving the entire "tasks" array to localStorage whenever a task was added or updated, then retrieving it when the page loads. Another challenge was managing task state while keeping the UI in sync. 
I solved this by storing tasks in an array of objects and creating reusable functions to update and display tasks.

If given more time, I would implement a feature for automatically clearing completed tasks, clearing the list, and deleting individual tasks from the list.