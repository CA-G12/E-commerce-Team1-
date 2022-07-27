// let purchases =[
//     {
//         id: 0, 
//         name: "plant",
//         details: "smull plant",
//         price: 25,
//         image: "https://i.ibb.co/nf93YNY/5a37d136-c321-475f-b281-30fc40c7412a-40f10ce7320a016aedc72daf70cf0850.jpg"        
//       }
// ]

let purchases1 = JSON.parse(window.localStorage.getItem("purchases"));
if (purchases1) {
  purchases1.push(purchases[0]);
  window.localStorage.setItem(`purchases`, JSON.stringify(purchases1));
} else {
  let purchases1 = [];
  purchases1.push(purchases[0]);
  window.localStorage.setItem(`purchases`, JSON.stringify(purchases1));
}

function getPurchaes() {
  let purchases1 = JSON.parse(window.localStorage.getItem("purchases"));

  let cardContainer = document.getElementById("card-container");

  for (let i = 0; i < purchases1.length; i++) {
    //!   Create Card
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    cardContainer.appendChild(card);
    //?   1 img products
    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img");
    cardImg.src = purchases1[i]["image"];
    card.appendChild(cardImg);
    //card-inner-div
    const cardInnerDiv = document.createElement("div");
    cardInnerDiv.setAttribute("class", "card-inner-div ");
    card.appendChild(cardInnerDiv);
    //  title-description-container
    const titleDescriptionContainer = document.createElement("div");
    titleDescriptionContainer.setAttribute(
      "class",
      "title-description-container"
    );
    cardInnerDiv.appendChild(titleDescriptionContainer);
    // card-title
    const cardName = document.createElement("h3");
    cardName.setAttribute("class", "card-title");
    cardName.textContent = purchases1[i]["name"];
    titleDescriptionContainer.appendChild(cardName);
    // card Description
    const cardDescription = document.createElement("h3");
    cardDescription.setAttribute("class", "card-description");
    cardDescription.textContent = purchases1[i]["details"];
    titleDescriptionContainer.appendChild(cardDescription);
    const deleteBtn = document.createElement("ion-icon");
    deleteBtn.setAttribute("name", "trash-outline");
    cardInnerDiv.appendChild(deleteBtn);
    // continer price
    const cardprice = document.createElement("div");
    cardprice.setAttribute("class", "card-price");
    card.appendChild(cardprice);
    // price
    const price = document.createElement("p");
    price.setAttribute("class", "total-price");
    price.textContent = purchases1[i]["price"];
    cardprice.appendChild(price);
  }
}
getPurchaes()
//total price for all purchases (subTotal)
subTotal();
function subTotal() {
  let subtotal = document.getElementById("subtotal-num");
  let s = document.querySelectorAll(".total-price");
  let sum = 0;
  console.log(s)
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i].textContent);
    sum += Number(s[i].textContent);
    console.log(sum)
    console.log(s[i].textContent)


  }

  subtotal.textContent = "$" + sum;
}
