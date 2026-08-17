// ==============================
// Select Elements
// ==============================

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const pendingTasks = document.getElementById("pendingTasks");
const finishedTasks = document.getElementById("finishedTasks");

const currentDate = document.getElementById("currentDate");
const currentTime = document.getElementById("currentTime");

// ==============================
// Task Array
// ==============================

let tasks = [];

// ==============================
// Date & Time
// ==============================

function updateDateTime(){

const now = new Date();

currentDate.innerHTML =
now.toLocaleDateString("en-US",{

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

});

currentTime.innerHTML =
now.toLocaleTimeString();

}

updateDateTime();

setInterval(updateDateTime,1000);

// ==============================
// Add Task
// ==============================

addTaskBtn.addEventListener("click",addTask);

function addTask(){

const text = taskInput.value.trim();

if(text===""){

alert("Please enter a task.");

return;

}

const task={

id:Date.now(),

title:text,

completed:false,

date:new Date().toLocaleString()

};

tasks.push(task);

taskInput.value="";

displayTasks();

}

// ==============================
// Display Tasks
// ==============================

function displayTasks(){

taskList.innerHTML="";

tasks.forEach(task=>{

const li=document.createElement("li");

li.className="task";

if(task.completed){

li.classList.add("completed");

}

li.innerHTML=`

<div class="task-left">

<input
type="checkbox"
class="task-check"
${task.completed ? "checked":""}
onchange="toggleTask(${task.id})">

<div class="task-info">

<div class="task-title">

${task.title}

</div>

<div class="task-date">

${task.date}

</div>

</div>

</div>

<div class="task-buttons">

<button
class="edit-btn"
onclick="editTask(${task.id})">

<i class="fa-solid fa-pen"></i>

</button>

<button
class="delete-btn"
onclick="deleteTask(${task.id})">

<i class="fa-solid fa-trash"></i>

</button>

</div>

`;

taskList.appendChild(li);

});

updateCounters();

}

// ==============================
// Delete Task
// ==============================

function deleteTask(id){

tasks=tasks.filter(task=>task.id!==id);

displayTasks();

}

// ==============================
// Complete Task
// ==============================

function toggleTask(id){

tasks.forEach(task=>{

if(task.id===id){

task.completed=!task.completed;

}

});

displayTasks();

}

// ==============================
// Counters
// ==============================

function updateCounters(){

totalTasks.innerHTML=tasks.length;

const completed=
tasks.filter(task=>task.completed).length;

finishedTasks.innerHTML=completed;

pendingTasks.innerHTML=
tasks.length-completed;

}
// ==============================
// Edit Task
// ==============================

function editTask(id){

const task=tasks.find(task=>task.id===id);

const newTask=prompt("Edit your task:",task.title);

if(newTask===null){

return;

}

if(newTask.trim()===""){

alert("Task cannot be empty.");

return;

}

task.title=newTask.trim();

saveTasks();

displayTasks();

}

// ==============================
// Local Storage
// ==============================

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function loadTasks(){

const storedTasks=localStorage.getItem("tasks");

if(storedTasks){

tasks=JSON.parse(storedTasks);

displayTasks();

}

}

loadTasks();

// ==============================
// Save After Every Change
// ==============================

const oldDisplay=displayTasks;

displayTasks=function(){

oldDisplay();

saveTasks();

}

// ==============================
// Theme
// ==============================

const themeBtn=document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

localStorage.setItem("theme","dark");

}

else{

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

localStorage.setItem("theme","light");

}

});

// ==============================
// Load Theme
// ==============================

function loadTheme(){

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="dark"){

document.body.classList.add("dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}

}

loadTheme();

// ==============================
// Filter Buttons
// ==============================

const filterBtns=document.querySelectorAll(".filter-btn");

filterBtns.forEach(button=>{

button.addEventListener("click",()=>{

filterBtns.forEach(btn=>{

btn.classList.remove("active");

});

button.classList.add("active");

const filter=button.dataset.filter;

filterTasks(filter);

});

});

// ==============================
// Filter Function
// ==============================

function filterTasks(filter){

const allTasks=document.querySelectorAll(".task");

allTasks.forEach((item,index)=>{

const task=tasks[index];

if(filter==="all"){

item.style.display="flex";

}

else if(filter==="pending"){

item.style.display=task.completed ? "none":"flex";

}

else if(filter==="completed"){

item.style.display=task.completed ? "flex":"none";

}

});

}

// ==============================
// Enter Key
// ==============================

taskInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

addTask();

}

});