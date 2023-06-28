const container = document.querySelector(".container");
const gridButton = document.querySelector("#submit-grid");
const clearGridButton = document.querySelector("#clear-grid");
const gridWidth = document.querySelector("#width-range");
const gridHeight = document.querySelector("#height-range");
const colorButton = document.querySelector("#color-input");
const eraseBtn = document.querySelector("#erase-btn");
const paintBtn = document.querySelector("#paint-btn");
const widthValue = document.querySelector("#width-value");
const heightValue = document.querySelector("#height-value")

const events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    }
};

let draw = false;
let erase = false;

let deviceType = "";
const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    }
    catch {
        deviceType = "mouse";
        return false;
    }
}

isTouchDevice();

gridButton.addEventListener("click", () => {
    container.innerHTML = "";
    let count = 0;
    for (let i = 0; i < gridHeight.value; i++) {
        count += 1;
        const div = document.createElement("div");
        div.classList.add("gridRow");
        for(let j=0; j < gridWidth.value; j++){
            count+=1;
            const col = document.createElement("div");
            col.classList.add("gridCol");
            col.setAttribute("id",`gridCol${count}`);
            col.addEventListener(events[deviceType].down, ()=>{
                draw = true;
                if(erase) {
                    col.style.backgroundColor="transparent";
                }else{
                    col.style.backgroundColor = colorButton.value;
                }
            });
            col.addEventListener(events[deviceType].move, (e)=>{
                let elementId = document.elementFromPoint(
                    !isTouchDevice() ? e.clientX : e.touches[0].clientX,
                    !isTouchDevice() ? e.clientY : e.touches[0].clientY
                ).id;
                checker(elementId);
            });
            col.addEventListener(events[deviceType].up, ()=> {
              draw = false;  
            })

            div.appendChild(col);
        }
        container.appendChild(div);
    }
})

function checker(elementId) {
    let gridColums = document.querySelectorAll(".gridCol");
    gridColums.forEach((element)=>{
        if(elementId==element.id){
            if(draw && !erase){
                element.style.backgroundColor=colorButton.value;
            }else if(draw && erase){
                element.style.backgroundColor = "transparent";
            }
        }

    })
}

clearGridButton.addEventListener("click",()=>{
    container.innerHTML="";
})
eraseBtn.addEventListener("click",()=>{
    erase=true;
})
paintBtn.addEventListener("click",()=>{
    erase=false;
})
gridWidth.addEventListener("input",()=>{
    widthValue.innerHTML = `${gridWidth.value}`;
})
gridHeight.addEventListener("input",()=>{
    heightValue.innerHTML = `${gridHeight.value}`;
})