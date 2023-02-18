const addButton = document.querySelector("#add-button");
const taskList = document.querySelector("#task-list");

addButton.addEventListener("click", () => {
  const newTaskInput = document.querySelector("#new-task");
  const newTask = newTaskInput.value.trim();
  const addButton = document.querySelector("#add-button");
  const body = document.querySelector("body");

  
  const randomColor1 = Math.floor(Math.random() * 156) + 100; // random value between 100 and 255
  const randomColor2 = Math.floor(Math.random() * 156) + 100; // random value between 100 and 255
  body.style.background = `linear-gradient(to bottom right, rgb(0, ${randomColor1}, ${randomColor2}), rgb(${randomColor1}, ${randomColor2}, 255))`;

  if (newTask !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <span>${newTask}</span>
      <button class="remove-button">Remove</button>
      <button class="modify-button">Modify</button>
    `;

    const removeButton = taskItem.querySelector(".remove-button");
    removeButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    const modifyButton = taskItem.querySelector(".modify-button");
    modifyButton.addEventListener("click", () => {
      const taskText = taskItem.querySelector("span");
      const newTask = prompt("Enter new task:");
      if (newTask !== null && newTask.trim() !== "") {
        taskText.textContent = newTask.trim();
      }
    });

    taskList.appendChild(taskItem);

    const randomColor1 = Math.floor(Math.random() * 156) + 100; // random value between 100 and 255
    const randomColor2 = Math.floor(Math.random() * 156) + 100; // random value between 100 and 255
    taskList.style.background = `linear-gradient(to bottom right, rgb(0, ${randomColor1}, ${randomColor2}), rgb(${randomColor1}, ${randomColor2}, 255))`;

    newTaskInput.value = "";
  }
});
