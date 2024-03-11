
// const array =  [2,  5, 3, 2, 7, 22, 11];
// let sum = 0;
// for (const element of array) {
//     sum = sum + element;


// }
// //average = > console.log(sum/array.length);



const array =  [2,  5, 3, 2, 7, 11];
const sum = array.reduce((runningTotal,value)=>{
    return runningTotal + value;

},100);
console.log(sum);//sum/array.length
const nestedArray = [[2,5],[4,5,6],[2,7,11]];
const arrayNum = nestedArray.flatMap((element => element));
console.log(arrayNum);




