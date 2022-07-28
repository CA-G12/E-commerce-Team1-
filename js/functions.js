function deleteFromArray(arr, idx) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == idx) {
            continue;
        }
        arr1.push(arr[i]);
    }
    return arr1;
}
const search1 = (arr,value)=>{
    let itemsArray=[];
arr.forEach(element=>{
    if(element.name === value){
        itemsArray.push(element)
    }
})
   return itemsArray;
}