const containerSpace = document.querySelector("div.container");


for (let i=0; i<16; i++){
    const gridSquare = document.createElement("div");
   gridSquare.classList.add("grid");
   containerSpace.appendChild(gridSquare);
};

function changeColor(e) {
    if (e.target.matches(".grid") ){
        e.target.style.backgroundColor = "#9E7B00";
    }
}

containerSpace.addEventListener("mouseover", changeColor);
//gridBlocks.forEach((item) => {addEventListener("mouseover", changeColor)});
