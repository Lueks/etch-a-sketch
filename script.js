function $(id) {
    return document.getElementById(id)};

const grid = $("grid");
const column = $("column");
const box = $("box");
const clrPck = $("clrPck");
const prevCol = $("prevColor");

let clmns = prompt("How many columns?", 16) -1;
let rws = prompt("How many rows?", 16) -1;

for (let i = 0; i <= clmns; i++) {
    let newColumn = document.createElement("div");
    newColumn.setAttribute("class", "column");
    grid.appendChild(newColumn);
        for (let j = 0; j <= rws; j++) {
            let newBox = document.createElement("div");
            newBox.setAttribute("class", "box");
            newColumn.appendChild(newBox);        
            };
};

let colorHistory = ["#ffffff"];
let undoHistory = [];
let currentColor = clrPck.value; 
let idx = 1

let setPrevColor = (color) => {
    let indx = colorHistory.length;
    if (indx < 1) {
        prevCol.style.backgroundColor = colorHistory[indx - 1];
    } else {
        prevCol.style.backgroundColor = colorHistory[indx - 2];
    }};

setPrevColor();

clrPck.addEventListener("change", () => {
    currentColor = clrPck.value;
    colorHistory.push(currentColor);
    setPrevColor();

});


        
prevCol.addEventListener("click", (e) => {
    currentColor = prevCol.style.backgroundColor;
    colorHistory.push(currentColor);
    setPrevColor();
    clrPck.value = prevCol.style.backgroundColor
    
    
});

let test = () => {console.log(colorHistory)};

let btns = document.querySelectorAll("div.box");
btns.forEach((btn) => {
btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = currentColor;   
});

// Implements the "paint" and "remove-paint" functionality to every div with the class .box
/* let btns = document.querySelectorAll("div.box");
btns.forEach((btn) => {
btn.addEventListener("click", (e) => {
    if (!e.target.classList.contains("boxC")) {
        e.target.classList.add("boxC");
    }    
    else {
        e.target.classList.remove("boxC");
    };   
}); */


let rstBtn = $("resetBtn");
rstBtn.addEventListener("click", () => {
    btns.forEach((btn) => {
        btn.style.backgroundColor = "#ffffff";
        });
    }); 

});