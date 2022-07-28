
const addButton = document.querySelector(".btn");
const nameInput = document.querySelector("#name");
const detailsInput = document.querySelector("#details");
const indexInput = document.querySelector("#index_input");
const priceInput = document.querySelector("#price");
const imgInput = document.querySelector("#image");
const categoryInput = document.querySelector("#category");
const searchInput = document.querySelector("#seachInput");
const searchIcon = document.querySelector("#searchIcon");
const container = document.querySelector(".productsList");
const showingItems = document.querySelector(".showingItems");

function addToLocalStorage(obje) {
    let plants = [];
    if (localStorage.getItem('products') == null) {
        plants = [];
    } else {
        plants = JSON.parse(localStorage.getItem('products'));
    }
    plants.push(obje);
    localStorage.setItem('products', JSON.stringify(plants));
}

// *******************************************************************************************************
addButton.addEventListener("click", () => {
    const instance = {
        name: nameInput.value,
        details: detailsInput.value,
        price: priceInput.value,
        image: imgInput.value,
        category: categoryInput.value
    };
    if (indexInput.value) {
        let array = JSON.parse(localStorage.getItem('products'));
        array.splice(indexInput.value, 1);
        array.push(instance)
        localStorage.setItem('products', JSON.stringify(array));
    } else {
        addToLocalStorage(instance);
    }
    nameInput.value = "";
    indexInput.value = "";
    detailsInput.value = "";
    priceInput.value = "";
    imgInput.value = "";
    categoryInput.value = "";
})

function showProducts(array, search = false) {

    array.forEach(element => {
        const itemsContainer = document.createElement("div");
        itemsContainer.classList.add("showingItems");
        const icon = document.createElement("p");
        const icon1 = document.createElement("i");
        icon1.innerHTML = '<i class="fa-solid fa-eye">';
        const icon2 = document.createElement("i");
        icon2.innerHTML = '<i class="fa-solid fa-pen"></i>';
        const icon3 = document.createElement("i");
        icon3.innerHTML = '<i class="fa-solid fa-delete-left"></i>';
        icon.appendChild(icon1);
        icon.appendChild(icon2);
        icon.appendChild(icon3);
        icon.classList.add = "icons";
        itemsContainer.appendChild(icon);
        const productCategory = document.createElement("p");
        productCategory.textContent = element.category;
        itemsContainer.appendChild(productCategory);
        const productPrice = document.createElement("p");
        productPrice.textContent = element.price;
        itemsContainer.appendChild(productPrice);
        const productName = document.createElement("p");
        productName.textContent = element.name;
        itemsContainer.appendChild(productName);
        itemsContainer.classList.add("showingItems")
        icon2.addEventListener("click", () => {
            let index = array.indexOf(element);
            nameInput.value = element.name;
            indexInput.value = index;
            detailsInput.value = element.details;
            priceInput.value = element.price;
            imgInput.value = element.image;
            categoryInput.value = element.category;
            addButton.textContent = "UPDATE";
        })
        icon3.addEventListener("click", () => {
            let sto = deleteFromArray(array, element);
            localStorage.setItem("products", JSON.stringify(sto));
            itemsContainer.remove();
        })
        container.appendChild(itemsContainer);
    })

}

let rose = [];
rose = JSON.parse(localStorage.getItem('products'));
showProducts(rose);

// search function
function search() {
    let neededItem = searchInput.value;
    if (neededItem.length > 0) {
        removeElementsByClass('showingItems')
    }
    let plants = [];
    plants = JSON.parse(localStorage.getItem('products'));
    showProducts(search1(plants,neededItem));
}

// *****************************************************************************************
function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

searchIcon.addEventListener("click", () => {

    search();

})

// ****************************************************************************************

function edit(array, index) {
    let obj = {};
    obj.name = nameInput.value;
    obj.details = detailsInput.value;
    obj.price = priceInput.value;
    obj.image = imgInput.value;
    obj.category = categoryInput.value;
    // array.splice(index);
    array.splice(index, 1);

}

