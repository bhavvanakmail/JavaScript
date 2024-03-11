//Addition of num 1 to 10
var sum = 0;
for (let index = 0; index <=10; index++) {
    sum = sum + index;

}
console.log(`Addition of 1 to 10 is : ${sum}`);

//reverse the string
var str = "Developer";
var reverseStr = "";
for (let index = str.length-1; index >=0; index--) {
    reverseStr = reverseStr + str.charAt(index);
    
}
console.log(`reverse string is: ${reverseStr}`);

//count the vowels
var str = "i am UI developer";
var count = 0;
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index)
    if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u') {
        count = count+1;
    }
}
console.log(`Total number of vowels are=> : ${count}`);

//another method
console.log("==================================");

var str = "I am UI developer";
var count = 0;
var vowelsCap = "AEIOU";
var vowelsLower = "aeiou";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index)
    if (vowelsCap.includes(char)) {
        count = count+1;
    }
}
console.log(`Total number of vowels are : ${count}`);

console.log("===========================================");
//1+1 + 2+2 + 3+3 + 4+4 5+5
var result =0;
for (let index = 1; index <=5; index++) {
    result = result + index * index;   
}
console.log(`sum of square numbers :${result}`);

