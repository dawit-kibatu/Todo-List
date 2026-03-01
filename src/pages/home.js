import "../styles/style.css";
let home=function(){
    let content=document.querySelector("#content");
    content.innerHTML="";
    let forest=document.createElement("div");
    let bigImage=document.createElement("div");
    bigImage.id="bigImage";
    content.style.cssText=`
    grid: repeat(auto-fit,minmax(100px,200px))/repeat(auto-fit,1fr);`
    let forestText=document.createElement("div");
    let forestImg=document.createElement("div");
    forestText.id="forestTxt";
    forestText.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Forest<br><br>The restaurant exists at the end of a long, unlit road. No sign marks its entrance, only a single lantern hung from a low-hanging branch, swaying slightly even when the air is still. Inside, the tables are rough-hewn wood, polished smooth by countless hands and countless meals.<br><br>Our signature dish is the venison. We don't print it on the menu. We don't need to. The ones who come here, they know to ask.<br><br>\"It's the forest's own offering,\" our server might say, leaning in slightly too close, her voice barely above a whisper. \"Ethically sourced. Naturally.\"<br><br>When the plate arrives, the meat rests in a pool of shadow-dark jus, surrounded by foraged mushrooms and tiny, bitter herbs you won't find in any market. The first bite carries the taste of damp autumn leaves, of cold streams running over ancient stones, of something green and growing and utterly wild.<br><br>Some diners pause mid-chew, a strange stillness settling over them. They look toward the tall windows that line one wall, windows that open directly onto the woods. Sometimes, if the timing is right, they'll see the eyes. Just beyond the glass, reflecting the candlelight back at them. Watching. Waiting.<br><br>The deer come right up to the edge of the clearing, you see. They stand in perfect stillness, their breath misting in the cold air, their heads bowed slightly as if in prayer. Or as if they're waiting for something. Someone.<br><br>Our hunters don't use guns. They don't use bows. They simply walk out among them, hands open and empty, and choose. The deer never run. They never startle. They only watch with those deep, liquid eyes, and wait to be selected.<br><br>The chef prefers the older ones. The matriarchs, with their grey-flecked muzzles and patient eyes. Their meat has more story in it, he says. More memory. More forest.<br><br>After service, when the last diner has driven back down that unlit road, the staff gathers in the kitchen. We share a small plate of the venison among ourselves. It's tradition. A reminder of what we owe to the darkness outside, to the soft-footed ones who give themselves so willingly.<br><br>\"To the forest,\" we toast, raising our glasses.<br><br>And from beyond the windows, in the absolute blackness between the trees, a soft answering sound drifts back. A low, collective exhale. A hundred warm bodies, pressing closer to the light.";
    forestImg.id="forestImg";
    forest.appendChild(forestText);
    forest.appendChild(forestImg);
    let infoDiv=document.createElement("div")
    let location=document.createElement("div");
    let hours=document.createElement("div");
    let contact=document.createElement("div");
    location.id="location";
    location.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Location<br><br>📍 Hollow Brook Road, 12 miles past Gray Birch, deep in the Tamarack Valley. No streetlights. No neighbours. Just the forest and the turn you almost miss."
    hours.id="hours"
    hours.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hours<br><br>🕊️ Open every day, dusk to dawn. If you arrive after midnight, the door will be unlocked. The kettle will be warm."
    contact.id="contact"
    contact.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact<br><br>☎️ (607) 555‑0199 — rings twice, then a soft voice says \"you're on the way.\"<br><br>🐾 No reservations needed. There's always room. The deer make sure of it.";
    infoDiv.appendChild(location)
    infoDiv.appendChild(hours);
    infoDiv.appendChild(contact);
    infoDiv.id="infoDiv";
    let deers=document.createElement("div");
    let deersText=document.createElement("div");
    let deersImg=document.createElement("div");
    deersText.id="deersTxt"
    deersText.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Deers<br><br>They come at dusk, emerging from between the ancient oaks like memories rising. There is something familiar in the way they hold themselves, something almost improper. The tilt of a head, the slight hunch of a shoulder—gestures that don't belong to animals.<br><br>The oldest doe carries a scar above her left eye, crescent-shaped, like the mark of a wedding ring worn for decades. She watches the restaurant windows with an intensity that feels personal, as if she's looking for someone specific. As if she's been looking for a very long time.<br><br>Sometimes, when the light catches them right, you can almost see it. The way one shifts her weight like a woman tired from standing. The way another cocks his head like a man about to speak. The young one with the crooked ear—that's the kind of injury you get from a fall, not from the forest. The kind you get as a child, learning to walk on two legs.<br><br>They don't startle at human voices. They turn toward them, listening. Understanding.<br><br>The chef says their eyes are too old for deer. Too much knowledge in them. Too much regret. When you look into them, really look, you feel you should apologize for something. You're just not sure what.<br><br>They gather at the forest's edge every night, standing in that patient semicircle. Watching the diners eat. Watching the candles flicker. Watching the warm light spill out onto the cold ground.<br><br>And sometimes, late, when only the staff remains, one of them will step forward. Just one pace. Just enough to cross from shadow into the faint glow. She'll stand there, that old doe with the scar, and she'll look at us through the glass with an expression that is not animal at all.<br><br>It's the look of someone who remembers. Who remembers forks and firelight. Who remembers being the one inside, looking out.<br><br>Then she turns, and the forest swallows her, and we are left with the silence and the soft sound of hooves on fallen leaves. Footsteps that sound almost like they used to walk differently. Once. A long time ago.";
    deersImg.id="deersImg";
    deers.appendChild(deersText);
    deers.appendChild(deersImg);
    let inn=document.createElement("div");
    let innText=document.createElement("div");
    let innImg=document.createElement("div");
    innText.id="innTxt"
    innText.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Inn<br><br>It stands where the road bends, white walls and grey shutters, smoke always rising from the chimney. The innkeeper knows your name before you tell her. She smiles like she's been waiting.<br><br>Only six rooms, but one is always free. The beds are soft, the windows open to rustling leaves. You'll sleep better than you have in years.<br><br>Breakfast at a long wooden table. Bread and honey, tea that tastes of pine. The other guests are pleasant. Some have been here a while. They speak of the inn like home.<br><br>The innkeeper tells stories at night. Nothing frightening. Just tales of travelers, of deer that watch from the garden's edge. Her voice is gentle. You could listen forever.<br><br>There's a bench where the trees begin. Guests watch the light fade there. They always come back. Mostly.<br><br>Sometimes one walks into the woods. Just for an hour, they say. The innkeeper smiles. The forest takes care of people, she says.<br><br>They don't always return. But on certain evenings, a figure stands at the garden's edge. Watching. Their eyes soft. Patient. Familiar.<br><br>Then they turn and vanish between the trees.<br><br>The innkeeper pours more tea. The fire crackles on.<br><br>You should visit sometime.<br><br>The deer would love to see you.";
    innImg.id="innImg";
    inn.appendChild(innText);
    inn.appendChild(innImg);
    forest.id="forest";
    deers.id="deers";
    inn.id="inn";
    let footer=document.createElement("div");
    footer.id="footer";
    footer.innerHTML=`Made by  <a href="https://github.com/dawit-kibatu">Dawit Kibatu</a>`
    let resturantName=document.createElement("div");
    resturantName.id="name"
    resturantName.textContent="The Bent Limb";
    bigImage.appendChild(resturantName);
    content.appendChild(bigImage);
    content.appendChild(infoDiv)
    content.appendChild(forest);
    content.appendChild(deers);
    content.appendChild(inn);
    content.appendChild(footer);
}
export default home