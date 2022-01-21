const ol = document.querySelector("ol");

let clientEvents = ["click","resize", "load", "scroll", "mouseenter", "keydown", "keyup","keypress","focus", "mouseover","mouseout", "mouseup", "select", "change"];

function clientEvent(eventType){
    eventType.map((el)=>{
        if(el){
            window.addEventListener(el, ()=>{
                eventType.push(el);
                let li = document.createElement("li");
                li.innerText += el;
                ol.appendChild(li);
            })
        }
    })
}

clientEvent(clientEvents);