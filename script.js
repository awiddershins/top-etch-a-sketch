const containerSpace = document.querySelector("div.container");
const gridSquare = document.createElement("div");
for (let i=0; i<16; i++){
   gridSquare.classList.add("grid");
   containerSpace.appendChild(gridSquare);
};

