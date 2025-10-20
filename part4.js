let tasks = []; // To store the tasks

// DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = ""; // Clear the current list
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      ${task.text}
      <button class="deleteBtn" onclick="deleteTask(${index})">Delete</button>
    `;
    li.addEventListener("click", () => toggleTaskCompletion(index));
    taskList.appendChild(li);
  });
}

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = ""; // Clear input field
    renderTasks();
  }
}

// Toggle task completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove task from the array
  renderTasks();
}

// Event listener for adding a task
addTaskBtn.addEventListener("click", addTask);

// Allow pressing 'Enter' to add a task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
