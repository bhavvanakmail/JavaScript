console.log("===================================Assignment :-1====================================================");
const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
const sum = array_numbers.reduce((runningTotal,value)=>{
    return runningTotal + value;

});
console.log("Sum using reduce method:-",sum);
console.log("----------------------------------------------------------------------");

let add = 0;
for (const element of array_numbers) {
    add = add + element;

}
console.log("Sum using for loop:-",add);
console.log("============================================step:-2============================================================");

const multiple_by_five = array_numbers.filter(currentValue => {
    return currentValue % 5 == 0;
  });
  
  console.log("Numbers multiple by 5 : ",multiple_by_five);
const sumation = multiple_by_five.reduce((runningTotal,value)=>{
    return runningTotal + value;

});
console.log("Sumation => ",sumation);
