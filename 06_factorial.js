console.log("===================factorial of number=============");
//3! = 1*2*3 => 6
//3! = 3*2*1 => 6
//4! = 4*3*2*1 => 24
//5! = 5*4*3*2*1 => 120

function factorial(num) {
    let result = 1;
    for (let index = 5; index >=1; index--) {
        result = result * index;
    }
    console.log(`factorial of ${num} is ${result}`);
}
factorial(5);
factorial(7);
factorial(10);

console.log("===================prime number=============");
//prime no is divisible by 1 and its self 


const array = [11, 3, 6, 10, 43, 29, 50];
console.log(`Given array :- [${array}]`);
add=0;
function isPrimeNumber(number) {
    for (let index = 2; index < number; index++) {
        if (number%index==0) {
            return false;
        }
        
    }
   return number>1;
}
var count = array.filter(isPrimeNumber);
console.log(`Prime number from given array are: ${count} and total count is: ${count.length}`);




