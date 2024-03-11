console.log(`=====Arithmatic operator=======`);
//+-*
var num1 = 10;
var num2 = 2;
var result = num1 * num2;
console.log(`multiplication result is : ${result}`);

var result = num1 ** num2;
console.log(`Exponential result  is : ${result}`);

var result = num1 ** 3;
console.log(`Exponential result  is : ${result}`);
 
var result = num1 / num2;
console.log(`division result  is : ${result}`);

var result = num1 % num2;
console.log(`remainder result  is : ${result}`);


console.log(`remainder result  is : ${10 % 3}`);
console.log(`modulus result  is : ${15 % 4}`);
console.log("=============unary operator==================");
var num1 = 10;
//var result = num1++;
//var result = num1+1;
var result = ++num1;

console.log(`result is :${result}`);

console.log("=============assignment operator==================");
var num3 = 5;
//vompound Addition +=
//num3 = num3 + 3;
num3+=3
console.log(`result of compound addition is : ${num3}`);

console.log("=============Comparision operator==================");
var str1 = "focus";
var str2 = "locus";
var result = str1 == str2;
console.log(`result of comparison is : ${result} ${typeof result}`);
//double equal to is compaire only value

var result = str1 === str2;
console.log(`result of comparison is : ${result} `);

var num1 = 10;
var num2 ="10";
var result = num1 == num2;
console.log(`result of comparision : ${result}`);
//tripal equal to is compaire value and datatype
var result = num1 === num2;
console.log(`result of comparision : ${result}`);

var num3 = 20
var result = num1!=num3;
console.log(`result of comparision : ${result}`);
console.log("===============");
var result = num1 > num3;
console.log(`result of greater than is: ${result}`);

var num4 = 20;
var result = num3 > num4;
console.log(`result of greater than is: ${result}`);

var result = num3 >= num4;
console.log(`result of greater than epqal is: ${result}`);


var result = 10 < num4;
console.log(`result of less than  is: ${result}`);


var result = 20<= num4;
console.log(`result of less than epqal is: ${result}`);

var marks = 35;
var result = marks>=35
console.log(`result of marks is: ${result}`);

console.log("==============Logical operator===============");
//AND &&
//OR ||
//NOT !
var num = 15;
var result = num%2==0
console.log(result);