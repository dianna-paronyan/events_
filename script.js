const olev = document.querySelector("#events");
let olcode = document.querySelector("#codes");

const clientEvents = ["click","resize", "load", "scroll", "mouseenter", "keydown", "keyup","keypress","focus", "mouseover","mouseout", "mouseup", "select", "change"];


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
                let li = document.createElement("li");
                li.innerText += el;
                olev.appendChild(li);
            })
        }
        if(el === "keyup"){
            window.addEventListener(el, (e)=>{
                
                let div = document.createElement("div");
                    array.push(e.code);
                    let sortedArr = qsort(array);

                    for(let i =0; i<sortedArr.length; i++){
                        olcode.innerHTML ="";
                        let li = document.createElement("li");
                        li.innerText = sortedArr[i];
                        div.appendChild(li)
                        
                    }
                    olcode.appendChild(div);
            })    
        }
    })

    return array;
}

clientEvent(clientEvents);


