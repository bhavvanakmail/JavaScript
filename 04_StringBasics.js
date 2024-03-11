var greet = "Good Morning";
var result = typeof greet;
console.log(result);
console.log("=================length property====================");

var totalLength = greet.length;
console.log("length of the string is :",totalLength);
console.log("=================charAt()====================");
var charAt0 = greet.charAt(5);
console.log("Charecter at index 0 is :",charAt0);
var lastIndexChar = greet.charAt(greet.length-1);
console.log('last index char is :',lastIndexChar);

//find third last charactor
var thirdlastChar = greet.charAt(greet.length-3);
console.log('last index char is :',thirdlastChar);

console.log("=================concatenation====================");
var firstName = "jenny";
var lastName = " gates";
var res = firstName.concat(lastName);
console.log(res);

console.log("===============indexOf====================");
var indexOfM = greet.indexOf('M');
console.log("Index Of M is : ",indexOfM);
 
console.log(greet.indexOf('nin'));

console.log('index of char z :',greet.indexOf('z'));
console.log('index of char D :',greet.indexOf('D'));

//if the string has same charecters then which index value is retuen
console.log('index of char o :',greet.indexOf('o'));
console.log('index of char o :',greet.lastIndexOf('o'));

console.log("===============replace====================");
var result = greet.replace('Morning',"Afternoon");
console.log(result);
var result = greet.replace(' ',"_");
console.log(result);

console.log('upper case :',greet.toUpperCase("Good Morning"));
console.log('lower case :',greet.toLowerCase("Good Morning"));

var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ",str.length);
var result = str.trim();
console.log("Length after trim :",result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim-lengthAfterTrim
console.log("Removed extra spaces are:",result);

var city = "My City Is Pune    ";
var beforeTrim = city.length;
var cityAfterEndtrim = city.trimEnd();
var lengthAfterEndTrim = cityAfterEndtrim.length;

var cityAfterStart = city.trimStart();
var lengthAfterStart = cityAfterStart.length;
///////////////////////////////////////////////////////////
console.log("==================includes=========================");
var result = greet.includes('Morning');
console.log("Is Morning word available :",result);
var result = greet.includes('nin');
console.log("Is nin word available :",result);
var result = greet.includes('good');
console.log("Is Morning word available :",result);

console.log("==========================search=================");
var greet = "Good Morning";
var result = greet.search('orn');
console.log(result);
var result = greet.search('after');
console.log(result);

console.log("==========================slice=================");
var greet = "Hello Good Morning";
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6,10);
console.log(result);

console.log("==========================split=================");
var result = greet.split(" ")
console.log(result);
//wap to count the total number of words
var str = "I am UI developer"
var words = str.split(" ")
console.log(words);
console.log("total words is :",words.length);
console.log(`total words is :${words.length}`);
console.log("datatype :",typeof words);
//String Templates
console.log(`I am "UI" developer`);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Addition of",num1,"and",num2,"is :",result);
console.log(`Addition of ${num1} and ${num2} is :${result}`);


