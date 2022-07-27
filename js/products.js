// let products =[
//     {
//         id: 0, 
//         name: "plant",
//         details: "smull plant",
//         price: 25,
//         image: "https://i.ibb.co/nf93YNY/5a37d136-c321-475f-b281-30fc40c7412a-40f10ce7320a016aedc72daf70cf0850.jpg"        
//       }
// ]



// let purchases =[
//     {
//         id: 0, 
//         name: "plant",
//         details: "smull plant",
//         price: 25,
//         image: "https://i.ibb.co/nf93YNY/5a37d136-c321-475f-b281-30fc40c7412a-40f10ce7320a016aedc72daf70cf0850.jpg"        
//       }
// ]

let productsLocal = JSON.parse(localStorage.getItem(`products`));
//? get data form localStorge
let getProducts = function () {
  let cardcontiner = document.getElementById("card-continer");

  let arr = [...productsLocal]
  arr.forEach((e,i)=>{


    //? card
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cardcontiner.appendChild(card);

    //? divForImg
    const divForImg = document.createElement("div");
    card.appendChild(divForImg);

    //  card image
    const cardImg = document.createElement("img");
    cardImg.src = productsLocal[i]["image"];
    divForImg.appendChild(cardImg);

    //Div overlay

    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");
    overlay.style.transform = "rotateX(0deg)";
    overlay.style.display = "none";
    divForImg.appendChild(overlay);

    //Div overlay > p

    const overlayPara = document.createElement("p");
    overlayPara.textContent = productsLocal[i]["details"];
    overlay.appendChild(overlayPara);

    //     <div class="descrip-addTocart">

    const descripAddTocart = document.createElement("div");
    descripAddTocart.setAttribute("class", "descrip-addTocart");
    card.appendChild(descripAddTocart);

    //card title
    const title = document.createElement("h3");
    title.textContent = productsLocal[i]["name"];
    descripAddTocart.appendChild(title);

    // card price
    const price = document.createElement("h4");
    price.textContent = productsLocal[i]["price"];
    descripAddTocart.appendChild(price);

    // add to cart button
    const addToCart = document.createElement("ion-icon");
    addToCart.name = "cart-outline";
    addToCart.addEventListener("click", addCart);
    descripAddTocart.appendChild(addToCart);
})

}
;

getProducts();