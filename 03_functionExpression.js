var show = function(){
console.log(`inside function expression...`);
}
show();

var add = function(value1,value2){  //function with argument and no return value
console.log(value1+value2);
}
add(20,10);

var square = function(value){//1.
    return value * value;

}
var result = square(25);
console.log(`square of 25 is ${result}`);
console.log(typeof square);//2

//


var string = function(){
var str = "JS the most popular language of internet";
var words = str.split(" ");
var totalWords = words.length;

//1.length
//2.charAt
//3.charAt(11)
//4.str.charAt(str.length-1)
//5.charAt(0)
//6.str.charAt(str.length-3)
//7.find the words=>(total no. of words)^2

}