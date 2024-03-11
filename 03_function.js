

// var num1 = 100;
// var num2 = 200;
// console.log("before swap : ",num1,num2);
// var temp = num1;
// num1 = num2;
// num2 = temp;
// console.log("after swap : ",num1,num2);

// var hubby = "virat";
// var wife = "anushka";
// console.log("before swap : ",hubby,wife);
// var temp = hubby;
// hubby = wife;
// wife = temp;
// console.log("after swap :",hubby,wife );

// var city1 = "pune";
// var city2 = "mumbai";
console.log("============function type:function with no argument and no return type============");
function myPersonalDetails(totalRs){
    console.log(totalRs);
    console.log("name=GK");
    console.log('city=pune');
    console.log('pincode=411033');
    console.log('is married:no');
}
myPersonalDetails();

console.log("============2.function type:function with argument and no return type============");
console.log("============swap==================");
function swap(val1,val2) {//function declaration
console.log("before swap : ",val1,val2);
var temp = val1;
val1 = val2;
val2 = temp;
console.log("after swap :",val1,val2 );
}
swap(100,200);//function call/invocation
swap("virat","anushka")
swap("India","USA")

console.log("============3.function type:function with argument and return type============");
function archu(rs){
console.log("she went market and bought vegitables");
var bag = "vegitables required for a week";
return bag;
}
var result = archu(100)


function square(num){
    var result = num * num;
    return result;
}
var squareNum = square(5);
console.log("num is 5 and its square is :",squareNum);