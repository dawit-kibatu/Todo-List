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
    let sideAddBtn=document.querySelector("#addBtn")
    let submitBtn=document.querySelector("#submitBtn")
    addBtn.addEventListener("click",()=>{
        popup.classList.add("openPop");
    })
    sideAddBtn.addEventListener("click",()=>{
        popup.classList.add("openPop");
    })
    submitBtn.addEventListener("click",()=>{
        let taskName=document.querySelector("#name").value;
        let dueDate=document.querySelector("#duedate").value;
        if(dueDate!==""){
        let task=createTask(taskName,dueDate);
        storeTask(task);
        popup.classList.remove("openPop");
        clearInputField();
        displayTasks(task)
        }     
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
        let taskname=document.createElement("div")
        taskname.textContent=task.name;
        taskname.classList.add("taskname");
        // div.innerHTML=`
        // <div class="taskname">${task.name}</div>
        // `
        // <div>${task.duedate}</div>

        let dltBtn=document.createElement("button");
        dltBtn.classList.add("dltBtn")
        dltBtn.addEventListener("click",()=>{
             div.remove()
             deleteTask(task);
        })
        div.appendChild(taskname)
        div.appendChild(dltBtn)
        tasks.appendChild(div)
        dltBtn.addEventListener("mouseenter",()=>{
            taskname.style.cssText=`text-decoration: line-through;`
        })
        dltBtn.addEventListener("mouseleave",()=>{
            taskname.style.cssText=`text-decoration: none;`
        })

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