const addBtn = document.querySelector("#addBtn");
const mainInput = document.querySelector("#mainInput");
const readyNamesBox = document.querySelector("#readyNamesBox");

let cart = [];
let i = 0;
let deletedCart = [];

class cartValue {
    constructor(name, id, btn, box) {
      this.name = name;
      this.id = id;
      this.btn = btn;
      this.box = box;
    };
  };

addBtn.addEventListener("click", function(){
    

    cart[i] = new  cartValue();
    cart[i].name = document.querySelector("#mainInput").value;
    cart[i].id = i;

    if(cart[i].name == 0){
        alert("You didn't write anything");
    } 

    else{   
        cart[i].box = document.createElement("DIV");
        cart[i].btn = document.createElement("BUTTON");

        cart[i].box.innerHTML = cart[i].name;
        cart[i].btn.innerHTML = "Delete";
        cart[i].btn.value = i;
        deletedCart += i;

        readyNamesBox.appendChild(cart[i].box);
        cart[i].box.appendChild(cart[i].btn);

        cart[i].btn.addEventListener("click", function(){

            readyNamesBox.removeChild(cart[this.value].box);
            
            cart[this.value].box.remove();
        
            deletedCart[this.value] = 'none';


            
            alert(deletedCart + "hello world " +  deletedCart[this.value]);
        })
        
    
        i ++;
        mainInput.value = "";
    }
});        
