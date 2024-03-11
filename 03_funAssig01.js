console.log("============Assignment :-Step 1==============================");
console.log("============function with no argument and no return type============");
function myName(){
    
    console.log("----I Am An Indian----");
    
}
myName();
function myAddress(){
    
    console.log("----I Leave In Pune----");
    
}
myAddress();
console.log("---------------------------------------------------------");
console.log("============Step 2==================");
function personalDetails(fname,lname,collegeName) {//function declaration
  
console.log("First Name : ",fname);
console.log("Last Name : ",lname);
console.log("College Name :",collegeName );

}

personalDetails("Bhavana","Mali","Pratibha College")

console.log("---------------------------------------------------------");
console.log("===============Step 3==================");
function swapValues(val1,val2) {//function declaration
console.log("before swap : ",val1,val2);
var temp = val1;
val1 = val2;
val2 = temp;
console.log("after swap :",val1,val2 );
}
swapValues("1.5","2.5")
swapValues("virat","anushka")
swapValues("1000","2000")

console.log("---------------------------------------------------------");
console.log("===============Step 4==================");
function addThreeValues(num1,num2,num3){
    var add = num1 + num2 + num3;
   return add;
    
}
var addition = addThreeValues(10.23,600,40);
console.log("given numbers are : 10.23,600,40");
console.log("Addition Of Numbers:",addition)
console.log("given values are:",'Hello','Good','Morning');
var sum = addThreeValues("Hello","Good","Morning");
console.log("Addition Of Values:",sum)
