const addBtn = document.querySelector("#addBtn");
const mainInput = document.querySelector("#mainInput");
const readyNamesBox = document.querySelector("#readyNamesBox");

let allName = [];
let i;
let nameTags = [];
let btnId = [];


addBtn.addEventListener("click", function(){

    var nameValue = document.querySelector("#mainInput").value;

    if(nameValue == 0){
        alert("You didn't write anything")
    }

        allName[i] = nameValue;

        nameTags[i] = document.createElement("DIV");
        readyNamesBox.appendChild(nameTags[i]);
        nameTags[i].classList.add("nameTags");
        nameTags[i].innerHTML = allName[i]
        
        

})