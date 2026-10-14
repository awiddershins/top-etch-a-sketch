const totalGridPixels = 400;

const containerSpace = document.querySelector(".container");
const btn = document.querySelector("#sizeAsk");
console.log(btn);

containerSpace.style.width = `${totalGridPixels}px`;
containerSpace.addEventListener("mouseover", changeOpacity);

createGrid(4);

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
            const pxSize = `${totalGridPixels/size}px`
            //create child overlay element
            const overlaySquare = document.createElement("div")
            overlaySquare.classList.add("overlay");
            overlaySquare.style.width = pxSize;
            overlaySquare.style.height = pxSize;
            overlaySquare.style.opacity = 0;
            //create grid element
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid");
            gridSquare.style.width = pxSize;
            gridSquare.style.height = pxSize;
            //append overlay to grid
            gridSquare.appendChild(overlaySquare);
            //append grid to container
            containerSpace.appendChild(gridSquare);
        }
    }
}

function changeOpacity(e) {
    if (e.target.matches(".overlay") ){
        console.log(e.target);
        const overlayStyle = getComputedStyle(e.target);
        const currOpac = Number(overlayStyle.getPropertyValue('opacity'));
        if (currOpac <=0.9) {
            e.target.style.opacity = currOpac + 0.1;
        }
    }
}


//gridBlocks.forEach((item) => {addEventListener("mouseover", changeColor)});
