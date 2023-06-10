const input = document.getElementById("user-input");
const tasklist = document.getElementById("list-container");
const add = document.querySelectorAll(".btn")[0];
const search = document.querySelectorAll(".btn")[1];
const totalcount = document.getElementById("to-count");
const completecount = document.getElementById("co-count");
let taskarray = [];
let editid='';


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

function deletetask(taskid) {
  taskarray = taskarray.filter((task) => {
    return task.id != taskid;
  });
  renderlist();
}

function edittask(text){
input.value=text;
}

function updatetask(){
taskarray.forEach((e)=>{
if(e.id==editid){
  e.text= input.value;
  input.value='';
  search.classList.add('search');
  renderlist();
}
});
  add.textContent='add';
  editid='';
};

function toggletask(id){
  taskarray.forEach((e)=>{
  if(e.id == id){
  e.done = !e.done;
    renderlist();
    return;
  }
  })
}


add.onclick = (e) => {
  if (e.target.textContent == "add") {
    
  addtask();
}else if(e.target.textContent == "update"){
updatetask();
}};


tasklist.onclick = (e) => {
  if (e.target.parentElement.id == "delete") {
    deletetask(e.target.parentElement.parentElement.id);
  } else if (e.target.tagName == "LI") {
    toggletask(e.target.id);
  } else if (e.target.parentElement.id == "edit") {
    add.textContent = "update";
    search.textContent = "cancel";
    search.classList.remove("search");

    editid = e.target.parentElement.parentElement.id;
    edittask(e.target.parentElement.parentElement.textContent);
  }
};

search.onclick=(e)=>{
if(e.target.textContent=='cancel'){
add.textContent='add';
  input.value='';
  search.classList.add('search');
}
}





