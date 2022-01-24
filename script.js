const olev = document.querySelector("#events");
const olcode = document.querySelector("#codes");

let clientEvents = ["click","resize", "load", "scroll", "mouseenter", "keydown", "keyup","keypress","focus", "mouseover","mouseout", "mouseup", "select", "change"];

// function clientEvent(eventType){
//     eventType.map((el)=>{
//         if(el){
//             window.addEventListener(el, ()=>{
//                 eventType.push(el);
//                 let li = document.createElement("li");
//                 li.innerText += el;
//                 ol.appendChild(li);
//             })
//         }
//     })
// }

function clientEvent(eventType){
    eventType.map((el)=>{
        if(el){
            window.addEventListener(el, ()=>{
                // eventType.push(el);
                let li = document.createElement("li");
                li.innerText += el;
                olev.appendChild(li);
            })
        }
         if(el === "keyup"){
            window.addEventListener(el, (e)=>{
                // eventType.push(el);
                let li = document.createElement("li");
                li.innerText += e.code;
                olcode.appendChild(li);
            })    
        }
    })
}



clientEvent(clientEvents);

// window.addEventListener("keydown",(e)=>{
//     console.log(e.code)
// })