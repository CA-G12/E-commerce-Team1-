// let products =[
    //     {
    //         id: 0, 
    //         name: "plant",
    //         details: "smull plant",
    //         price: 25,
    //         image: "https://i.ibb.co/nf93YNY/5a37d136-c321-475f-b281-30fc40c7412a-40f10ce7320a016aedc72daf70cf0850.jpg"        
    //       }
    // ]
    let products =[];
    const addButton = document.querySelector(".btn");
const nameInput= document.querySelector("#name");
const detailsInput = document.querySelector("#details");
const priceInput = document.querySelector("#price");
const imgInput = document.querySelector("#image");
const categoryInput = document.querySelector("#category");
const searchInput = document.querySelector("#seachInput");
const searchIcon = document.querySelector("#searchIcon");
const container = document.querySelector(".productsList");
// localStorage.setItem("products",JSON.stringify(products));
// localStorage Add function*************************************************************************************
function addToLocalStorage(obje) {
    let plants=[] ;
    if(localStorage.getItem('products')==null){
      plants=[];
    }else{
      plants = JSON.parse(localStorage.getItem('products'));
    }
    plants.push(obje);
    localStorage.setItem('products', JSON.stringify(plants));
    }
// *******************************************************************************************************
addButton.addEventListener("click",()=>{
   const instance = {
       name : nameInput.value,
       details: detailsInput.value,
       price: priceInput.value,
       image: imgInput.value,
       category: categoryInput.value
   };
   addToLocalStorage(instance);
   nameInput.value="";
   detailsInput.value="";
   priceInput.value="";
   imgInput.value="";
   categoryInput.value="";
})   
    