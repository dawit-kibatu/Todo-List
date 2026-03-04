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
        displayTasks(task);
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
        let tasks=document.querySelector(".tasks");
        tasks.innerHTML="";
        const keys=Object.keys(localStorage);
        keys.map((key)=>{
            let task=JSON.parse(localStorage.getItem(key));
            displayTasks(task);
        })
    }
    //returns 3 array of today tasks upcoming tasks or overdue tasks
    function taskAssign(){
        let today=[];
        let upcoming=[];
        let overdue=[];
        let date=new Date();
        const keys=Object.keys(localStorage);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Ensures 2 digits
        const day = date.getDate().toString().padStart(2, '0');       // Ensures 2 digits
        // Format to "DD-MM-YYYY"
        const formattedDateManual = `${year}-${month}-${day}`;
        keys.map((key)=>{
           let task=JSON.parse(localStorage.getItem(key));
            if(task.duedate==formattedDateManual){
                today.push(task)
            }
            else if(task.duedate>=formattedDateManual){
                upcoming.push(task)
            }
            else{
                overdue.push(task)
            }
        })
        return{today,upcoming,overdue};
    }
    //Event listners that display tasks based on the due dates
    let todayTasks=document.querySelector(".today");
    todayTasks.addEventListener("click",()=>{
        let tasks=document.querySelector(".tasks");
        tasks.innerHTML="";
        let todayTasks=taskAssign().today
        todayTasks.forEach((task)=>{
            displayTasks(task);
        })
    })
    let upcomingTasks=document.querySelector(".upcoming");
    upcomingTasks.addEventListener("click",()=>{
        let tasks=document.querySelector(".tasks");
        tasks.innerHTML="";
        let upcomingTasks=taskAssign().upcoming
        upcomingTasks.forEach((task)=>{
            displayTasks(task);
        })
    })
    let overdueTasks=document.querySelector(".overdue");
    overdueTasks.addEventListener("click",()=>{
        let tasks=document.querySelector(".tasks");
        tasks.innerHTML="";
        let overdueTasks=taskAssign().overdue
        overdueTasks.forEach((task)=>{
            displayTasks(task);
        })
    })
    //Event listener on the home icon to display all the tasks
    let allTasks=document.querySelector(".home");
    allTasks.addEventListener("click", getTasks)
}
export default home