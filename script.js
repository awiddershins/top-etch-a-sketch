const containerSpace = document.querySelector("div.container");


for (let i=0; i<16; i++){
    const gridSquare = document.createElement("div");
   gridSquare.classList.add("grid");
   containerSpace.appendChild(gridSquare);
};