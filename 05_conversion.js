var n1 = "20";
var n2 = 20;
console.log(n1==n2);
console.log("20"==20);

console.log(n1,typeof n1);
n1=+n1;
console.log(n1,typeof n1);

console.log('4'-true);//4-1/true represent 1 andfalse represent 0
console.log(`ans: '4' implicit converted to 4 (number) and true (Boolean)`);
console.log("===========================");
var result;
result = '3' + 2;
console.log(result);

result = '3' + true;
console.log(result);

result = '3' + undefined;
console.log(result);

result = '3' + null;
console.log(result);

console.log("==============================");
//explicit
//String to number
//1.using + operator
//2.number

var n1 = "20";
var n2 = Number(n1);
console.log(n2,typeof n2);

var isMarried = true;
var result = Number(isMarried);
console.log(result,typeof result);

//number to string
var n4 = 30;
var result = String(n4);
console.log(result,typeof result);

var result = Boolean("jenny");
console.log(result,typeof result);

var result = Boolean("");
console.log(result,typeof result);