// src/index.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    if (taskDescription === "") {
      alert("Please enter a task description");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerText = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  });
});