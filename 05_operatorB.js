console.log("====================Assignment-2==================================");
function greaterNumber(num1,num2){
  var result = num1 > num2 ? num1:num2;
  console.log(`Given numbers are : ${num1} ${num2}`);
  console.log(`greater number between two numbers: ${result}`);

}
greaterNumber(10,-10);
console.log("-----------------------------------");
greaterNumber(800,899);
console.log("===================================================================");
var num = 13;
var result = num%2 == 0 ? "True" : "False";
console.log(`Given number 13 is odd ${num} ==> ${result}`);
var num = 18;
var result = num%2 == 0 ? "True" : "False";
console.log(`Given number 18 is even ${num} ==> ${result}`);

console.log("===================================================================");
var wordLength = "javascript";
var result = wordLength.length%2 == 0 ? "Even" : "Odd";
console.log(`Given Word is "${wordLength}" And Word Length is : ${result}`);

var wordLength1 = "developer";
var result = wordLength1.length%2 == 0 ? "Even" : "Odd";
console.log(`Given Word is "${wordLength1}" And Word Length is : ${result}`);

var wordLength2 = "Google";
var result = wordLength2.length%2 == 0 ? "Even" : "Odd";
console.log(`Given Word is "${wordLength2}" And Word Length is : ${result}`);

