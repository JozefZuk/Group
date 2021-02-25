const addBtn = document.querySelector("#addBtn");
let allName = [];

addBtn.addEventListener("click", function(){

    var nameValue = document.querySelector("#mainInput").value;

    allName += nameValue;

})