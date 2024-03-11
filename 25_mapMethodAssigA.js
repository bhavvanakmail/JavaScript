
console.log("==================================Assignment :-1============================================================");
const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log("given array : ",arrayNumbers);
console.log("------------------------------------------------------------------------------------------------------------");
const arrayTransform = arrayNumbers.map((currenValue)=>{
    return currenValue*10;

});
console.log("Add 10 into each element : ",arrayTransform);
console.log("===========================================================================================================");
const cubeOfEach = arrayNumbers.map((currenValue)=>{
    return currenValue*currenValue*currenValue;

});
console.log("Cube the each array element :",cubeOfEach);
console.log("============================================================================================================");

const newArray = arrayNumbers.map((currentValue, index)=>{
    
    return currentValue + index;
});
console.log("Add the index value into its corresponding each array element: ",newArray);
