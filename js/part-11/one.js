const todoInput = document.getElementById("input-box");
const list = document.getElementById("list");
const button = document.getElementById("btn");

let tasks = [];

button.addEventListener("click", () => {
  const taskText = todoInput.Value.trim();

  if (taskText === "") {
    return;
  }
  const newTask = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };
  tasks.push(newTask);
  todoInput.value = "";
});
