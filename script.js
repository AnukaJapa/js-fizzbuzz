let container = document.querySelector(".container");

for(let i=1; i<=100; i++){
let newBox = document.createElement("div");
newBox.classList.add("box");
container.appendChild(newBox);

let boxWord ="";
if(i%3==0){
boxWord +="Fizz"
if(i%5==0) boxWord +="Buzz"
}else if(i%5==0) {
    boxWord +="Buzz";
} else {
    boxWord = i; 
}
newBox.textContent = boxWord;
console.log(boxWord);
}



