const todoInput = document.getElementById("todo-input");
const btn = document.querySelector("#add-btn");
const todoList = document.querySelector("#todo-list");

btn.onclick = function () {
  if (todoInput.value == "") {
    alert("Insert a task");
  } else {
    todoList.innerHTML += `
    <li>
    <span id="task-name">
    ${todoInput.value}
    </span>
    <button class = "delete">X</button>
    </li>
    `;
  }
  var currentTask = document.querySelectorAll(".delete");
  for (var i = 0; i < currentTask.length; i++) {
    currentTask[i].onclick = function () {
      this.parentNode.remove();
    };
  }
  todoInput.value = "";
};
