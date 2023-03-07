// get elements from HTML
var addButton = document.getElementById("addButton");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

// add task to list
function addTask() {
  if (taskInput.value) {
    var li = document.createElement("li");
    li.innerHTML = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  } else {
    alert("Please enter a task.");
  }
}

// mark task as complete
function completeTask(event) {
  var target = event.target;
  if (target.tagName === "LI") {
    target.classList.toggle("completed");
  }
}

// delete task from list
function deleteTask(event) {
  var target = event.target;
  if (target.tagName === "LI") {
    target.remove();
  }
}

// add event listeners
addButton.addEventListener("click", addTask);
taskList.addEventListener("click", completeTask);
taskList.addEventListener("dblclick", deleteTask);
