const addBtn = document.querySelector("#addBtn");
const mainInput = document.querySelector("#mainInput");
const readyNamesBox = document.querySelector("#readyNamesBox");

let allName = [];
let readyCart = [];
let i = 0;

class nameCart {
    constructor(name, id) {
      this.name = name;
      this.id = id;
    };
  };

addBtn.addEventListener("click", function(){
    allName[i] = new  nameCart();
    allName[i].name = document.querySelector("#mainInput").value;
    allName[i].id = i;

    if(allName[i].name == 0){
        alert("You didn't write anything");
    } 

    else{   
        readyCart[i] = document.createElement("DIV");
        readyCart[i].innerHTML = allName[i].name;
        readyNamesBox.appendChild(readyCart[i]);

        i ++;

}
});        

