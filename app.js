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

// addTask function
function addTask() {
    let name = taskNameInput.value;
    let category = categoryInput.value;
    let deadline = deadlineInput.value;
    let status = statusInput.value;

    if (!name || !category || !deadline) {
        alert("Please fill out all fields");
        return;
    }

    let task = {
        id: Date.now(),
        name: name,
        category: category,
        deadline: deadline,
        status: status
    };

    tasks.push(task);
    saveTasks();
    displayTasks();
    clearForm();
}

function displayTasks() {
    taskList.innerHTML = "";
    checkOverdueTasks();

    let statusFilter = filterStatus.value;
    let categoryFilter = filterCategory.value.toLowerCase();

    let filteredTasks = tasks.filter(function (task) {
        let statusMatch =
            statusFilter === "All" || task.status === statusFilter;

        let categoryMatch =
            task.category.toLowerCase().includes(categoryFilter);

        return statusMatch && categoryMatch;
    });
}





