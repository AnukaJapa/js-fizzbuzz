let container = document.querySelector(".container");

for(let i=1; i<=100; i++){
let newBox = document.createElement("div");
newBox.classList.add("box");
container.appendChild(newBox);
}



