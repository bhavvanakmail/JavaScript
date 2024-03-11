console.log("============================Array Assignments-1============================");

const arrayFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`given array : [${arrayFruits}]`);
console.log(`First element in the array is : ${arrayFruits[0]}`);
console.log(`Last element in the array is : ${arrayFruits[arrayFruits.length-1]}`);

console.log("=======================step-2============================================");
arrayFruits.unshift("Papaya");
console.log(`Add element "papaya" before Banana : [${arrayFruits}]`);
console.log("=======================step-3============================================");
const arrayElements = arrayFruits.indexOf("Mango");//starting index to other index
if (arrayElements > -1) {
    arrayFruits.splice(arrayElements,1);
}
console.log(`Remove "Mango" from the array : [${arrayFruits}]`);

console.log("=======================step-4============================================");
arrayFruits.push("Pineapple");
console.log(`Insert an element "Pineapple" at last position : [${arrayFruits}]`);

console.log("=======================step-5============================================");
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(`insert an element before "Water Melon" : [${arrayFruits}]`);

console.log("=======================step-6============================================");
arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace an element "Orange" with "Kiwi" : [${arrayFruits}]`);

console.log("=======================step-7============================================");
const arrayElem = arrayFruits.slice(1,4);//starting index to other index
console.log(`elements starting from index 1 to 4 : [${arrayElem}]`);

console.log("=======================step-8============================================");
const arrayFruits1 = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`given array : [${arrayFruits1}]`);
var lastThree = arrayFruits1.slice(-3);
if (arrayFruits1.length < 5) {
    lastThree.shift();
}
console.log(`Last three elements is : [${lastThree}]`);
