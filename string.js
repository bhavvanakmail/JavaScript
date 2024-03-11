var str = "i am good UI developer";
var words = str.split(" ")
console.log(`given string is : ${words}`);
console.log(`total words is :${words.length}`);
console.log("=================");

var str = "Bhavana";
var reverseStr = "";
   for (let index = str.length-1; index >=0; index--) {
       reverseStr = reverseStr + str.charAt(index);
       
   }
console.log(`reverse string is: ${reverseStr}`);