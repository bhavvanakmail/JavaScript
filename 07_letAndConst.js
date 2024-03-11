var num1 = 10;
console.log(num1);

let num2 = 30;
console.log();
const PI = 3.14; 
console.log(PI);
console.log("================================");
//scope = Accessibility
function addition(){
    var greet = "Good Morning";
if (30>20) {
    let num3 = 100;
    let num4 = 200;
    var result = 10 + 20;
    
}
    console.log(result);
    //console.log(num3);  not allowed here
    //console.log(num4); not allowed here
}
//console.log(result);//outside of function is not allowed
addition();


for (let index = 0; index < 5; index++) {
    console.log(index);
    
}