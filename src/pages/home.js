import { mdiFunctionVariant } from "@mdi/js";
import "../styles/style.css";
let home=function(){
    let content=document.querySelector("#content");
    function createTask(name,duedate){
        return{
            name,
            duedate
        }
        }
    let task1=createTask("finding a job","soon");
    console.log(task1)
    //stores the task in localstorage
    function storeTask(task){
        localStorage.setItem(`${task.name}`,JSON.stringify(task))
    }
    storeTask(task1);
    console.log(localStorage.getItem("finding a job"));
    //removes the task from the local storage
    function deleteTask(task){
        localStorage.removeItem(`${task.name}`)
    }
    deleteTask(task1)
    console.log(localStorage.getItem(`${task1.name}`));
}
export default home