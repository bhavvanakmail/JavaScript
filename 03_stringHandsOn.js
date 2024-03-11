console.log("===================Assignment-2====================================");
var stringHandsOn = 
console.log(`1. Given string :${stringHandsOn}`);"   Hey you are doing good,keep it up    ";

var lengthBeforeTrim = stringHandsOn.length;
console.log(`2. Length of the string :${stringHandsOn.length}`);
var result = stringHandsOn.trim();
console.log(`3. After removing space string :${result}`);

var lengthAfterTrim = result.length;
var result = lengthBeforeTrim-lengthAfterTrim
console.log(`4. Removed extra spaces are: ${result}`);

var result = stringHandsOn.trim();

var firstChar = result.charAt(0); 
var lastChar = result.charAt(result.length-1);
console.log(`5. After trim first character :${firstChar} and last character :${lastChar}`);

var words = result.split(" ")
console.log(`6. Total words in the String :${words}`);
console.log(`Count of words is :${words.length}`);
var indexOf = result.indexOf('good');
console.log("7. Index Of good is : ",indexOf);

var substring = result.slice(22);
console.log(`8. substring at 22 : ${substring}`);

var str_ends = result.includes('up');
console.log(`9. String ends with up :${str_ends}`);

var str_starts = result.includes('Hey');
console.log(`10.String starts with up :${str_starts}`);
