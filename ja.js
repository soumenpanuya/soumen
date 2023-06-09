const input = document.getElementById("user-input");
const add = document.querySelectorAll(".btn")[0];
const search = document.querySelectorAll(".btn")[1];
const totalcount = document.getElementById("to-count");
const completecount = document.getElementById("co-count");
add.onclick = (e) => {
  if (e.target.textContent == "add") {
    
  completecount.textContent=input.value;
}};
