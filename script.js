let canvas = document.querySelector(".canvas");
let mouseDown = false;
let isRainbow = false;
let isSoft = false;

canvas.addEventListener("mousedown", () =>{
    mouseDown = true;
})
canvas.addEventListener("mouseup", () =>{
    mouseDown = false;
})

let rainbowButton = document.querySelector("#rainbow");
rainbowButton.addEventListener("click", ()=>{
    isRainbow = !isRainbow;
})
let softButton = document.querySelector("#soft");
softButton.addEventListener("click", ()=>{
    isSoft = !isSoft;
})

let colorPicker =  document.querySelector("#color_picker");

makeCanvas(8);

function rainbow(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(e){
    let color = isRainbow ? rainbow() : colorPicker.value;

    if (e.style.backgroundColor == ''){
        e.style.backgroundColor = color;
        if (isSoft){
            if (e.style.opacity < 1) e.style.opacity = 0.1;
        }
        else {
            e.style.opacity = 1;
        }
    }
    else {
        e.style.backgroundColor = color;
        if (isSoft){
            if (e.style.opacity < 1) e.style.opacity = 0.1 + Number(e.style.opacity);
        }
        else {
            e.style.opacity = 1;
        }
    }
    // if(isSoft){
    //     // e.style.opacity = 0.1 + Number(e.style.opacity);
    //     if(e.style.backgroundColor == ''){
    //         console.log("new tile!");
    //         e.style.backgroundColor = color;
    //         e.style.opacity = 0.1;
    //     }
    //     else if (e.style.opacity < 1){
    //         console.log(e.style.opacity + "darken it!")
    //         e.style.opacity = 0.1 + Number(e.style.opacity);
    //     }
    // }
    // else {
    //     e.style.backgroundColor = color;
    //     e.style.opacity = 1;
    // }
}

// clears canvas & draws a sideLen x sideLen grid
function makeCanvas(sideLen=8){
    console.log("inside makeCanvas function, s=", sideLen)
    canvas.replaceChildren();
    for(r = 0; r < sideLen; r++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (c = 0; c < sideLen; c++){
            let pixel = document.createElement("div");
            pixel.addEventListener("mousedown", ()=>{
                changeColor(pixel);
            })
            pixel.addEventListener("mouseover", ()=>{
                // console.log(mouseDown);
                if(mouseDown){
                    changeColor(pixel);
                }
            })
            pixel.classList.add("pixel");
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

let label = document.querySelector("#size_lab");
let slider = document.querySelector(".canvas_size input");
slider.addEventListener("change", ()=>{
    label.innerHTML = "Current canvas size: " + slider.value;
    makeCanvas(slider.value);
})

