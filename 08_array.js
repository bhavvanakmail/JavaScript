
let array = [10, 20, 30, 40, 50, 60];
console.log(typeof array);
console.log(array);

console.log(`total elements in array is :${array.length}`);

console.log(`==============Accessing or Updating array elements=========================`);

let element0thIndex = array[0];
console.log(element0thIndex);
console.log(array[1]);
console.log(array[array.length-1]);
console.log(`second last element in the array is : ${array[array.length-2]}`);

console.log(`=================updating an elements=====================`);
array[1] = 70;
console.log(array);
console.log(`===========================indexOf==================================`);
console.log(array.indexOf(30));

console.log(`============================traversing an array=============================`)
let arrayNum = [22,11,44,55,77,33];

for (let index = 0; index < array.length; index++) {
    const element = arrayNum[index];
    console.log(element);
}
console.log(`=====================traversing an array in reverse order=============================`)
for (let index = arrayNum.length-1; index >=0; index--) {
    const element = arrayNum[index];
   console.log(element);
}

console.log(`=====================even no or not============================`)
for (let index = 0; index < arrayNum.length; index++) {
    if (index%2) {
    const element = arrayNum[index];
   console.log(element);
    }
    
}
    
let num = [22,11,44,55,77,33];
console.log(`========Adding element in last=====================`);
num.push(88);
console.log(num);

console.log(`========Removing element in last=====================`);
num.pop();
console.log(num);

console.log(`========Adding element in first=====================`);
num.unshift(99);
console.log(num);

console.log(`========Removing element in first=====================`);
num.shift();
console.log(num);


console.log(`============================sum of an array=============================`)
let array1 = [22,11,44,55,77,33];
let sum = 0;
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    sum = sum + element;
    console.log(sum);
}
console.log(`============================slice()method=============================`)

let array2 = [22,11,44,55,77,33];
const arraySliced = array2.slice(3);
console.log(arraySliced);

const arrayElements = array2.slice(1,4);//starting index to other index
console.log(arrayElements);

console.log(`============================splice()method=============================`)
var arraynum = [22,11,44,55,77,33];
const splicedElements = arraynum.splice(4);
console.log(arraynum);
console.log(splicedElements);

console.log(`===========splice() to remove elements with index and delete count=============================`)
var arraynum = [22,11,44,55,77,33];
var removedElements = arraynum.splice(2,2);//start index from delete index
console.log(arraynum);
console.log(removedElements);

console.log(`============================splice() to insert element============================`)
var arraynum = [22,11,44,55,77,33];
//insert element 99 at index 2 => [22,11,44,55,77,33];
arraynum.splice(2,0,99);
console.log(arraynum);

console.log(`====insert elements 100,200,400 at index 3 and at the time of insertion don't replace any element==================`)
//insert elements 100,200,400 at index 3 => [22,11,44,100,200,400,55,77,33];
var arraynum = [22,11,44,55,77,33];
arraynum.splice(3,0,100,200,400);
console.log(arraynum);

console.log(`insert an element 500 by at index 2 by replacing an element`);
var arraynum = [22,11,44,55,77,33];
//[22,11,500,55,77,33];
arraynum.splice(2,1,500);
console.log(arraynum);

console.log(`insert an element 700 at index 3 by replacing 2 elements `);
var arraynum = [22,11,44,55,77,33];
//[22,11,44,700,55,77,33];
arraynum.splice(3,2,700)
console.log(arraynum);

console.log(`========for in loop==============`);
var arraynum = [22,11,44,55,77,33];
for (const index in arraynum) {
       const element = arraynum[index];
       console.log(`index: ${index},value: ${element}`);
    
}

console.log(`========traversing an array using while loop==============`);

var arraynum = [22,11,44,55,77,33];
let index=0;
while (index<arraynum.length) {
    console.log(arraynum[index]);
    index++;
}

console.log(`========for of loop==============`);
var arraynum = [22,11,44,55,77,33];
for (const element of arraynum) {
    console.log(element);
}
console.log("=====join method=========");
const joinElement = arraynum.join("_");
console.log(joinElement);

console.log(`========resizing an array==============`);
var arraynum = [22,11,44,55,77,33];
arraynum.length = 3;
console.log(arraynum);

//assignment-
// 1.length
// 2.length
// 3.length
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.%5==0
// 10.include
// 11.include
// 12.spilce
// 13.splice
