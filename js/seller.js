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
function showProducts(array){
    array.forEach(element=>{
       const itemsContainer = document.createElement("div");
       itemsContainer.classList.add("showingItems");
       const icon = document.createElement("p");
       const icon1 = document.createElement("i");
       icon1.innerHTML='<i class="fa-solid fa-eye">';
       const icon2 = document.createElement("i");
       icon2.innerHTML='<i class="fa-solid fa-pen"></i>';
       const icon3 = document.createElement("i");
       icon3.innerHTML='<i class="fa-solid fa-delete-left"></i>';
       icon.appendChild(icon1);
       icon.appendChild(icon2);
       icon.appendChild(icon3);
       icon.classList.add="icons";
       itemsContainer.appendChild(icon);
        const productCategory = document.createElement("p");
        productCategory.textContent=element.category;
        itemsContainer.appendChild(productCategory);
        const productPrice = document.createElement("p");
        productPrice.textContent=element.price;
        itemsContainer.appendChild(productPrice);
        const productName = document.createElement("p");
        productName.textContent=element.name;
        itemsContainer.appendChild(productName);
        itemsContainer.classList.add("showingItems")
        icon2.addEventListener("click",()=>{
            let obj ={};
            let index = array.indexOf(element);
           console.log(index);
           nameInput.value = element.name;
           detailsInput.value= element.details;
           priceInput.value= element.price;
           imgInput.value= element.image;
           categoryInput.value= element.category;   
           addButton.textContent="UPDATE";
           addButton.addEventListener("click",()=>{
               obj.name = nameInput.value;
               obj.details = detailsInput.value;
               obj.price = priceInput.value;
               obj.image = imgInput.value;
               obj.category = categoryInput.value;
               array.splice(index);
               array.splice(index,element);
               
               // localStorage.setItem("products",JSON.stringify(array))
           //   deleteFromArray(array,element);
           //   addButton.textContent="Add";
           //   nameInput.value="";
           //   detailsInput.value="";
           //   priceInput.value="";
           //   imgInput.value="";
           //   categoryInput.value="";
           //   array.push(object);
           //   localStorage.setItem("products",JSON.stringify(array));
           }) 
           
         
        })
        icon3.addEventListener("click",()=>{
           let sto = deleteFromArray(array,element);
           localStorage.setItem("products",JSON.stringify(sto));
           itemsContainer.remove();
       })
        container.appendChild(itemsContainer);
    })  
   }    
   let rose = [];
rose=JSON.parse(localStorage.getItem('products'));
showProducts(rose);
// search function*************************************************************************
// function search(){
//     let neededItem = searchInput.value;
//         let plants = [];
//         let items=[];
//              plants = JSON.parse(localStorage.getItem('products'));
//              plants.forEach(element => {
//                 if(element.name === neededItem){
//                    items.push(element);
//                 }
//                });  
//          showProducts(items);      
//      }
    

// searchIcon.addEventListener("click",()=>{
    
//     search();

// })
let searchInput1 = document.querySelector("#seachInput");
console.log(searchInput1)

function search() {

  let cards = document.querySelectorAll(".showingItems");

  for (let i = 0; i < cards.length; i++) {
    // console.log(searchInput.value.toUpperCase());
    // console.log(cards[i].title);
// console.log(cards[i].children[3].textContent=== searchInput1.value );
    if (
        cards[i].children[3].textContent== searchInput1.value
    ){
        cards[i].style.display = "";
        console.log("hhhhhhhhhhh")
    }
    else cards[i].style.display = "none";
  }
  
}
searchInput1.addEventListener("keyup", search);
// ****************************************************************************************


