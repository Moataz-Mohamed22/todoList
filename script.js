const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");

//add new task in the list

function addTask() {
    let taskValue = inputTask.value;
    if (!taskValue) {
        alert("You must add a value");
    } else {
        let li =document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML =taskValue;
        taskList.appendChild(li);
        span.innerHTML ="&times;";
        li.appendChild(span);
    }
    // Clear input after adding task
    inputTask.value = "";
    setTask();
}
// Add task when click to add button 

btn.addEventListener("click", addTask);

taskList.addEventListener("click",function(e){
if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    setTask();
}else if (e.target.tagName ==="SPAN") {
    e.target.parentElement.remove();
        setTask();

}
});
// Add functionality when click enter it will add a new task;
inputTask.addEventListener("keydown",function(e){
if(e.key ==="Enter"){
    addTask();
}
});
// Save Task to Local storage

function setTask (){
    localStorage.setItem("lists", taskList.innerHTML);
}
// Load the saved tasks from storage
function loadTasks (){
    taskList.innerHTML =localStorage.getItem("lists");
}
loadTasks();