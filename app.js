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
filterCategory.addEventListener("input", displayTasks);

// add task function
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

// display tasks function
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

    // filter tasks function
    filteredTasks.forEach(function (task) {
        let li = document.createElement("li");

        if (task.status === "Overdue") {
            li.classList.add("overdue");
        }

        li.innerHTML = `
  <span>
    <strong>${task.name}</strong> |
    ${task.category} |
    ${task.deadline} |
    ${task.status}
  </span>

  <select>
    <option value="In Progress">In Progress</option>
    <option value="Completed">Completed</option>
  </select>
`;

        let select = li.querySelector("select");
        select.value = task.status;

        select.addEventListener("change", function () {
            updateStatus(task.id, this.value);
        });

        taskList.appendChild(li);
    });
}

// status updating function
function updateStatus(id, newStatus) {
    let task = tasks.find(function (task) {
        return task.id === id;
    });

    task.status = newStatus;
    saveTasks();
    displayTasks();
}

// checks for overdue tasks
function checkOverdueTasks() {
  let today = new Date().toISOString().split("T")[0];

  tasks.forEach(function (task) {
    if (task.deadline < today && task.status !== "Completed") {
      task.status = "Overdue";
    }
  });
}

// saves tasks to local storage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// clears form
function clearForm() {
  taskNameInput.value = "";
  categoryInput.value = "";
  deadlineInput.value = "";
}

displayTasks();





