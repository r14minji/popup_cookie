const pop = document.querySelector("#popup");
const btnClose = pop.querySelector(".close");
const btnDel = document.querySelector(".btnDel");
const btnView = document.querySelector(".btnView");
const isCookie = document.cookie.indexOf("today=done");// 찾으면 0, 못찾으면 -1
let isOn;
console.log(isCookie);

/*
if(isCookie == -1){
  isOn = "block";
}else{
  isOn = "none";
}
popup.style.display = isOn;
*/

(isCookie == -1) ? isOn = "block" : isOn = "none";
popup.style.display = isOn;




btnView.addEventListener("click", e =>{
  e.preventDefault();
  console.log(document.cookie)
})
btnDel.addEventListener("click", e=>{
  e.preventDefault();
  setCookie("today", "done", 0);
})

btnClose.addEventListener("click", e => {
  pop.style.display = "none";

  let isChecked = pop.querySelector("input[type=checkbox]").checked;
  if(isChecked)  setCookie("today", "done", 1);
})

function setCookie( name, val, due){
  const today = new Date();
  const day = today.getDate();
  today.setDate(day + due);
  const duedate = today.toGMTString();
  document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}