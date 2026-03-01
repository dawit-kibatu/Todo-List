import "../styles/menu.css";
import dish1 from "../images/pexels-mali-65175.jpg";
import dish2 from "../images/pexels-nadin-sh-78971847-14701403.jpg";
import dish3 from "../images/Gemini_Generated_Image_207qb0207qb0207q.png";
import dish4 from "../images/Gemini_Generated_Image_cmqhqucmqhqucmqh.png";
import dish5 from "../images/famery-fialiwan-hUuFeqpw7CA-unsplash.jpg";
import dish6 from "../images/Gemini_Generated_Image_lr0i3zlr0i3zlr0i.png"; 
import dish7 from "../images/hanna-balan-RL-494_qSLQ-unsplash.jpg";
import dish8 from "../images/pexels-cristian-rojas-8477074.jpg";
import dish9 from "../images/Gemini_Generated_Image_3lnw223lnw223lnw.png";
import dish10 from "../images/Gemini_Generated_Image_9vj87l9vj87l9vj8.png";
import dish11 from "../images/Gemini_Generated_Image_tliqqftliqqftliq.png";
import dish12 from "../images/Gemini_Generated_Image_gfxtzdgfxtzdgfxt.png";
import drink_1 from "../images/pexels-brunoscramgnon-1337825.jpg";
import drink_2 from "../images/pexels-caleboquendo-3038241.jpg";
import drink_3 from "../images/pexels-chuchuphinh-1194030.jpg";
import drink_4 from "../images/pexels-fotios-photos-109275.jpg";
import drink_5 from "../images/pexels-isabella-mendes-107313-338713.jpg";
import drink_6 from "../images/pexels-kowalievska-1187766.jpg";

let menu=function(){
   let content = document.querySelector("#content");
   content.style.cssText=`
   grid: repeat(3,minmax(100px,200px))/repeat(2,1fr);`
   content.innerHTML = ""
   let mainCourse = document.createElement("div");
   let sideDish = document.createElement("div");
   let drinks = document.createElement("div");
   mainCourse.id = "main"
   sideDish.id = "side";
   drinks.id = "drinks";

   // MAIN COURSE DISHES
   let mainDish1 = document.createElement("div");
   let mainDish1Txt = document.createElement("div");
   mainDish1Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Watcher's Haunch<p><p>venison from the old doe who stands longest at the tree line, braised in juniper and shadow";
   let mainDish1Img = document.createElement("img");
   mainDish1Img.src = dish1;
   mainDish1.appendChild(mainDish1Txt);
   mainDish1.appendChild(mainDish1Img);
    
   let mainDish2 = document.createElement("div");
   let mainDish2Txt = document.createElement("div");
   mainDish2Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;What She Forgot<p><p>slow-roasted shoulder of a matriarch, served with mushrooms that taste of damp wool and cellars";
   let mainDish2Img = document.createElement("img");
   mainDish2Img.src = dish2;
   mainDish2.appendChild(mainDish2Txt);
   mainDish2.appendChild(mainDish2Img);
    
   let mainDish3 = document.createElement("div");
   let mainDish3Txt = document.createElement("div");
   mainDish3Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Quiet One<p><p>a young buck who never learned to run, seared and rested in its own stillness";
   let mainDish3Img = document.createElement("img");
   mainDish3Img.src = dish7;
   mainDish3.appendChild(mainDish3Txt);
   mainDish3.appendChild(mainDish3Img);
    
   let mainDish4 = document.createElement("div");
   let mainDish4Txt = document.createElement("div");
   mainDish4Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Her Last Morning<p><p>rabbit that fed on wild thyme and dew, roasted whole with herbs from the clearing's edge";
   let mainDish4Img = document.createElement("img");
   mainDish4Img.src = dish4;
   mainDish4.appendChild(mainDish4Txt);
   mainDish4.appendChild(mainDish4Img);
    
   let mainDish5 = document.createElement("div");
   let mainDish5Txt = document.createElement("div");
   mainDish5Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Traveler<p><p>pheasant stuffed with chestnuts and the faint smell of cigarette smoke";
   let mainDish5Img = document.createElement("img");
   mainDish5Img.src = dish5;
   mainDish5.appendChild(mainDish5Txt);
   mainDish5.appendChild(mainDish5Img);
    
   let mainDish6 = document.createElement("div");
   let mainDish6Txt = document.createElement("div");
   mainDish6Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Understone<p><p>trout from the black creek, tasting of cold and things that hide from light";
   let mainDish6Img = document.createElement("img");
   mainDish6Img.src = dish6;
   mainDish6.appendChild(mainDish6Txt);
   mainDish6.appendChild(mainDish6Img);

   mainCourse.appendChild(mainDish1);
   mainCourse.appendChild(mainDish2);
   mainCourse.appendChild(mainDish3);
   mainCourse.appendChild(mainDish4);
   mainCourse.appendChild(mainDish5);
   mainCourse.appendChild(mainDish6);

   // SIDE DISHES
   let sideDish1 = document.createElement("div");
   let sideDish1Txt = document.createElement("div");
   sideDish1Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Roots That Remember<p><p>carrots and parsnips pulled from gravesoil, roasted with honey from bees that never sleep";
   let sideDish1Img = document.createElement("img");
   sideDish1Img.src = dish3;
   sideDish1.appendChild(sideDish1Txt);
   sideDish1.appendChild(sideDish1Img);

   let sideDish2 = document.createElement("div");
   let sideDish2Txt = document.createElement("div");
   sideDish2Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Fingers of Earth<p><p>potatoes boiled in water from the iron spring, crushed with butter from the last cow";
   let sideDish2Img = document.createElement("img");
   sideDish2Img.src = dish8;
   sideDish2.appendChild(sideDish2Txt);
   sideDish2.appendChild(sideDish2Img);

  let sideDish3 = document.createElement("div");
  let sideDish3Txt = document.createElement("div");
  sideDish3Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Widow's Harvest<p><p>braised leeks and onions, soft as secrets, stained with beet juice like old blood";
  let sideDish3Img = document.createElement("img");
  sideDish3Img.src = dish9;
  sideDish3.appendChild(sideDish3Txt);
  sideDish3.appendChild(sideDish3Img);

  let sideDish4 = document.createElement("div");
  let sideDish4Txt = document.createElement("div");
  sideDish4Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Gatherer's Remorse<p><p>wild greens that grow where the boundary fence used to stand, wilted in bacon fat and regret";
  let sideDish4Img = document.createElement("img");
  sideDish4Img.src = dish10;
  sideDish4.appendChild(sideDish4Txt);
  sideDish4.appendChild(sideDish4Img);

  let sideDish5 = document.createElement("div");
  let sideDish5Txt = document.createElement("div");
  sideDish5Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Bone Nest<p><p>morels stuffed with breadcrumbs and herbs, foraged from the clearing where the fire was";
  let sideDish5Img = document.createElement("img");
  sideDish5Img.src = dish11;
  sideDish5.appendChild(sideDish5Txt);
  sideDish5.appendChild(sideDish5Img);

  let sideDish6 = document.createElement("div");
  let sideDish6Txt = document.createElement("div");
  sideDish6Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Last Year's Cabbage<p><p>fermented slowly through the long dark, sharp with the taste of waiting";
  let sideDish6Img = document.createElement("img");
  sideDish6Img.src = dish12;
  sideDish6.appendChild(sideDish6Txt);
  sideDish6.appendChild(sideDish6Img);

  sideDish.appendChild(sideDish1);
  sideDish.appendChild(sideDish2);
  sideDish.appendChild(sideDish3);
  sideDish.appendChild(sideDish4);
  sideDish.appendChild(sideDish5);
  sideDish.appendChild(sideDish6);

  // DRINKS
  let drink1 = document.createElement("div");
  let drink1Txt = document.createElement("div");
  drink1Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;What She Whispered<p><p>mead from honey gathered at dusk, when the bees speak in tongues";
  let drink1Img = document.createElement("img");
  drink1Img.src = drink_1;
  drink1.appendChild(drink1Txt);
  drink1.appendChild(drink1Img);

  let drink2 = document.createElement("div");
  let drink2Txt = document.createElement("div");
  drink2Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Drowner's Share<p><p>clear spirits that taste of riverweed and the bubbles from a sunken lung";
  let drink2Img = document.createElement("img");
  drink2Img.src = drink_2;
  drink2.appendChild(drink2Txt);
  drink2.appendChild(drink2Img);

  let drink3 = document.createElement("div");
  let drink3Txt = document.createElement("div");
  drink3Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Stillness<p><p>water from the deep well, where the surface never moves and wishes are returned unanswered";
  let drink3Img = document.createElement("img");
  drink3Img.src = drink_3;
  drink3.appendChild(drink3Txt);
  drink3.appendChild(drink3Img);

  let drink4 = document.createElement("div");
  let drink4Txt = document.createElement("div");
  drink4Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Red Memory<p><p>wine from grapes grown on the hill where they buried the strangers, bold and unsettled";
  let drink4Img = document.createElement("img");
  drink4Img.src = drink_4;
  drink4.appendChild(drink4Txt);
  drink4.appendChild(drink4Img);

let drink5 = document.createElement("div");
let drink5Txt = document.createElement("div");
drink5Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;The Last Toast<p><p>dark ale brewed with heather and something that crunched between the stones";
let drink5Img = document.createElement("img");
drink5Img.src = drink_5;
drink5.appendChild(drink5Txt);
drink5.appendChild(drink5Img);

let drink6 = document.createElement("div");
let drink6Txt = document.createElement("div");
drink6Txt.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Her Milk<p><p>warm and thick, from the nanny goat with the knowing eye";
let drink6Img = document.createElement("img");
drink6Img.src = drink_6;
drink6.appendChild(drink6Txt);
drink6.appendChild(drink6Img);

drinks.appendChild(drink1);
drinks.appendChild(drink2);
drinks.appendChild(drink3);
drinks.appendChild(drink4);
drinks.appendChild(drink5);
drinks.appendChild(drink6);

content.appendChild(mainCourse);
content.appendChild(sideDish);
content.appendChild(drinks);

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
}
export default menu