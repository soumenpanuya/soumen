const input = document.getElementById("user-input");
const tasklist = document.getElementById("list-container");
const add = document.querySelectorAll(".btn")[0];
const search = document.querySelectorAll(".btn")[1];
const totalcount = document.getElementById("to-count");
const completecount = document.getElementById("co-count");
let taskarray = [];

add.onclick = (e) => {
  if (e.target.textContent == "add") {
    
  addtask();
}};

function renderlist() {
  tasklist.innerHTML = "";
  let totaltask = 0;
  let completetask = 0;
  taskarray.forEach((task) => {
    let li = document.createElement("li");
    li.id = task.id;
    if (task.done == true) {
      li.classList.add("checked");
      completetask++;
    } else {
      li.classList.remove("checked");
    }

    li.innerHTML = `<p>${task.text}</p><span id="edit"><i class="fa-solid fa-pen-to-square"></i></span><span id="delete"><i class="fa-solid fa-trash"></i></span>`;
    tasklist.appendChild(li);
    totaltask++;
  });
  totalcount.innerHTML = totaltask;
  completecount.innerHTML = completetask;
}

function addtask() {
  if (input.value === "") {
    alert("Please enter some task...");
    return;
  } else {
    let task = {
      text: input.value,
      id: Date.now().toString(),
      done: false,
    };
    taskarray.splice(0, 0, task);
    input.value = "";
    renderlist();
  }
}



