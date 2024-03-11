console.log("============================Assignment-1====================================");
function squareOfWordLength(){
    var str="JavaScript"
    console.log("1.1.the given string is:",str);
    console.log("length of the given string is :",str.length);
    console.log("square of the length:",str.length*str.length);
    console.log("--------------------------------------------------------------------");
    var str="Google Chrome"
    console.log("1.2.the given string is:",str);
    console.log("length of the given string is :",str.length);
    console.log("square of the length:",str.length*str.length);
    console.log("--------------------------------------------------------------------");

    var str="Developer Smart"
    console.log("1.3.the given string is:",str);
    console.log("length of the given string is :",str.length);
    console.log("square of the length:",str.length*str.length);

}
squareOfWordLength();

console.log("--------------------------------------------------------------------");
var string = "I am Angular Developer";
console.log("2.Given string is :",string);
var result = string.length;
console.log("string length = ",result);

var words = string.split(" ")
console.log("words in the string :",words);
var ans = result/4;
console.log("2.1.divided by total no of words = ",ans);
console.log("--------------------------------------------------------------------");

var answer = result*words.length
console.log("2.2.multiplication of string and words:",answer);
