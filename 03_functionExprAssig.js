console.log("=========================Assignment_1======================");
var square = function(value){//1.
    var result = value * value;
    console.log(`square of ${value} is : ${result}`);
    return result;
}
square(5);
square(6);
square(25);
square(100);
square(67);
square(89);
square(59);
console.log("=================step2==================");
console.log(`type of function is=>${typeof square}`);
console.log("=================step3==================");
var rectangle = function(length,width){
    var area = length * width;
    console.log(`Area of rectangle plot is : ${area}`);

}
rectangle(499,917);
console.log("=================step4==================");
var swapValues = function(val1,val2){
    console.log("before swap : ",val1,val2);
    var temp = val1;
     val1 = val2;
     val2 = temp;
    console.log("after swap :",val1,val2 );
    }
    swapValues("Mahi","Raina");
    swapValues(55,77);
    console.log("=================step5==================");
    var string = function(){
        var str = "JS the most popular language of internet";
        var totalLength = str.length;
        console.log("Total charecter available in the string :",totalLength);
        var character = str.charAt(6);
        console.log(`character at index 6 is : "${character}"`);
        var character = str.charAt(11);
        console.log(`character at index 11 is : "${character}"`);
        var words = str.split(" ");
        var lastChar = str.charAt(str.length-1);
        console.log(`Last character of the string is  : "${lastChar}"`);
        var charAt0 = str.charAt(0);
        console.log(`First character of the string is  : "${charAt0}"`);
        var thirdLast = str.charAt(str.length-3);
        console.log(`Third last character of the string is  : "${thirdLast}"`);
        var totalWords = words.length;
        var result = totalWords*totalWords;

        console.log(`Total words available in the string : ${totalWords} and square of it is : ${result}`);
       
    }
    string();
