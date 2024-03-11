console.log("===================Array Assignments-2========================");

const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`given array is : [${arrayNumbers}]`);
console.log("----------------------------step -1----------------------------------");
console.log(`total elements is : [${arrayNumbers.length}]`);
console.log("----------------------------step -2----------------------------------");
console.log(`First element in the array is : ${arrayNumbers[0]}`);
console.log(`Last element in the array is : ${arrayNumbers[arrayNumbers.length-1]}`);
console.log("----------------------------step -3----------------------------------");
const array = arrayNumbers[arrayNumbers.length-3];
console.log(`Third last element is : [${array}]`);
console.log("----------------------------step-4----------------------------------");
let even1 = [];
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2 == 0 ) {
        even1.push(arrayNumbers[index]);
      const element = arrayNumbers[index];
      }
}
console.log(`Even numbers in an array are: [${even1}]`);
console.log("----------------------------step-5----------------------------------");
let odd1 = [];
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%2 !== 0 ) {
        odd1.push(arrayNumbers[index]);
      const element = arrayNumbers[index];
      }
}
console.log(`Odd numbers in an array are: [${odd1}]`);
console.log("----------------------------step-6----------------------------------");
 let even = [];
let sum1 = 0;
for (const index in arrayNumbers) {
    if ([index]%2 == 0 ) {
        even.push(arrayNumbers[index]);
      const element = arrayNumbers[index];
      sum1 = sum1 + element;
      }
}
console.log(`Even positioned elements in an array are: [${even}] and its sum = ${sum1}`);

console.log("----------------------------step-7----------------------------------");
let odd = [];
let sum = 0;
for (const index in arrayNumbers) {
    if ([index]%2 != 0 ) {
        odd.push(arrayNumbers[index]);
      const element = arrayNumbers[index];
      sum = sum + element;
      
      }
}
console.log(`Odd positioned elements in an array are: [${odd}] and its sum = ${sum}`);
console.log("----------------------------step-8----------------------------------");
let Addition = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    Addition = Addition + element;
}
console.log(`Sum of all elements from arrayNumbers is : ${Addition}`);

console.log("----------------------------step-9----------------------------------");
// %5==0
let multipleOf = [];
for (const index in arrayNumbers) {
    if (arrayNumbers[index]%5 == 0 ) {
        multipleOf.push(arrayNumbers[index]);
      const element = arrayNumbers[index];
      }
}
console.log(`The numbers which are multiple of 5 : [${multipleOf}]`);

console.log("----------------------------step-10----------------------------------");
let givenNo = arrayNumbers.includes(115)
console.log(`Is number 115 available in arrayNumbers? : ${givenNo}`);

console.log("----------------------------step-11----------------------------------");
let givenNo2 = arrayNumbers.includes(23)
console.log(`Is number 23 available in arrayNumbers? : ${givenNo2}`);
console.log("----------------------------step-12----------------------------------");
let insertion = arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log("----------------------------step-13----------------------------------");
var removedElements = arrayNumbers.splice(4,3);//start index from delete index
console.log(`delete 3 elements starting from index 4 : [${arrayNumbers}]`);
// console.log(removedElements);
