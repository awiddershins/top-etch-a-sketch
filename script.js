const totalGridPixels = 400;

const containerSpace = document.querySelector(".container");
const btn = document.querySelector("#sizeAsk");
console.log(btn);

containerSpace.style.width = `${totalGridPixels}px`;
containerSpace.addEventListener("mouseover", changeColor);

btn.addEventListener("click", () => {
    let gridSize = prompt("What size?", 4);
    while (containerSpace.firstChild){
        containerSpace.removeChild(containerSpace.lastChild);
    }
    console.log(containerSpace);
    if (gridSize <= 100) {
        createGrid(gridSize);
    }
})

function createGrid(size){
    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid");
            pxSize = `${totalGridPixels/size}px`
            gridSquare.style.width = pxSize;
            gridSquare.style.height = pxSize;
            containerSpace.appendChild(gridSquare);
        }
    }
}

function changeColor(e) {
    if (e.target.matches(".grid") ){
        e.target.style.backgroundColor = "#9E7B00";
    }
}


//gridBlocks.forEach((item) => {addEventListener("mouseover", changeColor)});
