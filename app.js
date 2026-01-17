let taskNameInput = document.getElementById("taskName");
let categoryInput = document.getElementById("category");
let deadlineInput = document.getElementById("deadline");
let statusInput = document.getElementById("status");

let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

let filterStatus = document.getElementById("filterStatus");
let filterCategory = document.getElementById("filterCategory");

// Data
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Event lisenters
addTaskBtn.addEventListener("click", addTask);
filterStatus.addEventListener("change", displayTasks);
filterCategory.addEventListener("inout", displayTasks);







