const olev = document.querySelector("#events");
let olcode = document.querySelector("#codes");

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

function qsort(arr){
    if(arr.length <2){
        return arr;
    }else{
        const pivot = arr[Math.floor(Math.random()* arr.length)];
        const less = arr.filter(val => val<pivot);
        const greater = arr.filter(val => val> pivot);
        return [...qsort(less), pivot, ...qsort(greater)]
    }
}

function clientEvent(eventType){
    let array =[]
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
                
                let div1 = document.createElement("ol");
                let c= [];
                    array.push(e.code);
                    let a = qsort(array);
                    
                    console.log(a);
                    for(let i =0; i<a.length; i++){

                        olcode.innerHTML ="";
                        let li = document.createElement("li");
                        li.innerText = a[i];
                        div1.appendChild(li)
                        
                    }
                    olcode.appendChild(div1);
            })    
        }
    })

    return array;
}

clientEvent(clientEvents);


