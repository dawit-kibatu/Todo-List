import { mdiFunctionVariant } from "@mdi/js";
import "../styles/style.css";
let home=function(){
    let tasks=document.querySelector(".tasks");
    getTasks()
    function createTask(name,duedate){
        return{
            name,
            duedate
        }
        }
    //stores the task in localstorage
    function storeTask(task){
        localStorage.setItem(`${task.name}`,JSON.stringify(task));
    }
    //removes the task from the local storage
    function deleteTask(task){
        localStorage.removeItem(`${task.name}`)
    }
    let popup=document.querySelector(".popup");
    let addBtn=document.querySelector(".add");
    let submitBtn=document.querySelector("#submitBtn")
    addBtn.addEventListener("click",()=>{
        popup.classList.add("openPop");
    })
    submitBtn.addEventListener("click",()=>{
        let taskName=document.querySelector("#name").value;
        let dueDate=document.querySelector("#duedate").value;
        let task=createTask(taskName,dueDate);
        storeTask(task);
        popup.classList.remove("openPop");
        clearInputField();
        displayTasks(task)
    })
    let cancelBtn=document.querySelector("#cancel");
    cancelBtn.addEventListener("click",()=>{
        popup.classList.remove("openPop");
        clearInputField();
    });
    function clearInputField(){
         document.querySelector("#name").value=""
         document.querySelector("#duedate").value=""
        }
    //displays the tasks on the page
    function displayTasks(task){
        let div=document.createElement("div");
        div.classList.add("task");
        div.innerHTML=`
        <div>${task.name}<div/>
        <div>${task.duedate}<div/>
        `
        tasks.appendChild(div)
    }
    //gets the tasks from localStorage and prints them out on the page
    function getTasks(){
        const keys=Object.keys(localStorage);
        keys.map((key)=>{
            let task=JSON.parse(localStorage.getItem(key));
            displayTasks(task)
        })
    }
}
export default home