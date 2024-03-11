console.log("===================1.swap numbers using function with argument and return type============");
function swapping(val1,val2){
    console.log("before swap : ",val1,val2);

    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("after swap :",val1,val2 );

    return temp;
    
}
var swapNum = swapping(14,30);
var swapNum = swapping("Bhavana","Mali");
var swapNum = swapping(15.25,30.8);



console.log("===================2.swap number numbers using function no argument and no return type============");
function swap(){
    var val1 = 5
    var val2 = 2
    console.log("before swap : ",val1,val2);

    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("after swap :",val1,val2 );

    
}swap()

console.log("============3.swap number numbers using function with argument and no return type============");

function swapnum(val1,val2) {//function declaration
    console.log("before swap : ",val1,val2);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("after swap :",val1,val2 );
    }
    swapnum(100,200);//function call/invocation
    swapnum("pin","location");
    swapnum(1.5,8.11);

    console.log("==========================find the largest number===============================");
var largestNumber = [20, 65, 300,200, 1,500];
var max = 0;
for (let index = 0; index <= max; index++) {

    if (largestNumber[index] > max) {

       max = largestNumber[index];

    }
}
console.log(`Given Array is : [${largestNumber}]`);
console.log(`largest number in the array is : ${max}` );

console.log("-------------------------------------------------------------------");

var largNum = [12.3,40,60,78.6,76.9,34];
var max = 0;
for (let index = 0; index <= max; index++) {

    if (largNum[index] > max) {

       max = largNum[index];

    }
}
console.log(`Given Array is : [${largNum}]`);
console.log(`largest number in the array is : ${max}` );


console.log("============================================================");
