let canvas = document.querySelector(".canvas");

let canvasvp = 80;
let mouseDown = false

canvas.addEventListener("mousedown", () =>{
    mouseDown = true;
})
document.addEventListener("mouseup", () =>{
    mouseDown = false;
})


makeCanvas(8);
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
                pixel.style.backgroundColor = "grey";
            })
            pixel.addEventListener("mouseover", ()=>{
                if(mouseDown){
                    pixel.style.backgroundColor = "grey";
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
    console.log("draggefd");
    label.innerHTML = slider.value;
    makeCanvas(slider.value);
})

