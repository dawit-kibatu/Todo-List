import staff from "../images/pexels-elizabeth-zernetska-86424040-9409746.jpg";
import "../styles/about.css"
let about=function(){
    let content=document.querySelector("#content");
    content.textContent=""
    let staffPic=document.createElement("img");
    staffPic.id="staff"
    staffPic.src=staff;
    let description=document.createElement("div");
    description.id="description"
    description.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;History & Staff<br><br>The inn has stood at the bend of Hollow Brook Road for as long as anyone remembers. It burned twice—1887 and 1923—and rebuilt itself overnight both times. Locals stopped asking questions.<br><br>A photographer came through in the 1950s and took a group shot out back. When he developed it, there were more faces than people. That photograph still hangs behind the front desk.<br><br><b>Elara</b> — innkeeper since 1972. Knows your name before you arrive. Doesn't sleep.<br><br><b>Marlow</b> — kitchen. Arrived one winter, frost on his coat. Walks the tree line at dusk, talking to someone.<br><br><b>June</b> — front of house. Appears behind you without walking. Remembers every guest.<br><br><b>Silas</b> — grounds. Doesn't speak. Sits at the bench where trees begin. Things grow where he's been.<br><br>The photograph shows them all, wearing clothes from another time, standing with people no one has seen in years. The same Elara. The same Marlow. A woman in back who looks exactly like June.<br><br>The photographer swore he took one picture. The frame holds six.";
    description.style.cssText="padding:2rem";
    let footer=document.createElement("div");
    footer.id="footer";
    footer.innerHTML=`Made by  <a href="https://github.com/dawit-kibatu">Dawit Kibatu</a>`
    footer.style.cssText=`
    #footer{
    grid-column:1/13 ;
    grid-row:11/13;
    border-top:solid gray;
     }`
    content.appendChild(footer)
    content.appendChild(staffPic);
    content.appendChild(description);
}
export default about