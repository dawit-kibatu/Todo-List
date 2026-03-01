import home from "./pages/home.js";
import menu from "./pages/menu.js";
import about from "./pages/about.js"
home()
let menuBtn=document.querySelector("#menu");
menuBtn.addEventListener("click",()=>{
    menu()
});
let homeBtn=document.querySelector("#home");
homeBtn.addEventListener("click",()=>{
    home()
});
let aboutBtn=document.querySelector("#about");
aboutBtn.addEventListener("click",()=>{
    about()
});