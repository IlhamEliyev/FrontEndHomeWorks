let addTaskBtn = document.querySelector(".add-task");
let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");
let btnDeleteTasks = document.querySelector(".delete-task");
addTaskBtn.onclick = () => {
  if (!taskInput.value.trim() == "") {
    let getDateOfTask =
      new Date().getDate() +
      "/" +
      new Date().getMonth() +
      "/" +
      new Date().getFullYear();
    newTask =
      "<li class = 'list-group-item'>" +
      taskInput.value +
      " (" +
      getDateOfTask +
      ")" +
      "</li>";
    taskWrapper.innerHTML = newTask + taskWrapper.innerHTML;
    taskInput.value = "";
  } else {
    alert("Can't add empty task!");
  }
};

window.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    if (!taskInput.value.trim() == "") {
      let getDateOfTask =
        new Date().getDate() +
        "/" +
        new Date().getMonth() +
        "/" +
        new Date().getFullYear();
      newTask =
        "<li class = 'list-group-item mb-3'>" +
        taskInput.value +
        " (" +
        getDateOfTask +
        ")" +
        "</li>";
      taskWrapper.innerHTML = newTask + taskWrapper.innerHTML;
      taskInput.value = "";
    } else {
      alert("Can't add empty task!");
    }
  }
});

btnDeleteTasks.addEventListener("click",() =>{
    taskWrapper.innerHTML = "";
    alert("All tasks deleted")
});












