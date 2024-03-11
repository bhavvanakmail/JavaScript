console.log(`=====================even no or not============================`)

let arrayNumbers = [22, 11, 44, 55, 77, 33];
 let even = [];
for (let index = 0; index < arrayNumbers.length; index++) {
    if ([index]%2 == 0 ) {
      even.push(arrayNumbers[index]);
    const element = arrayNumbers[index];
    }
}
console.log(`Even numbers in an array are: ${even}`);

console.log(`============================sum of an array=============================`)

let sum = 0;

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum = sum + element;
}
console.log(`sum of array is : ${sum}`);

