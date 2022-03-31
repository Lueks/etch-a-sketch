function $(id) {
    return document.getElementById(id)};

const grid = $("grid");
const column = $("column");
const box = $("box");

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
}

let btns = document.querySelectorAll("div.box");
btns.forEach((btn) => {
btn.addEventListener("click", (e) => {
    if (!e.target.classList.contains("boxC")) {
        e.target.classList.add("boxC");
    }    
    else {
        e.target.classList.remove("boxC");
    };   
});

let rstBtn = $("resetBtn");
rstBtn.addEventListener("click", () => {
btns.forEach((btn) => {
    btn.classList.remove("boxC");
});
}); 

});