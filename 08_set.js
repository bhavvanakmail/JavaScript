


//to create set
const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);


console.log(setOfRollNum);
console.log(`total element in set is :${setOfRollNum.size}`);
//clear set
// setOfRollNum.clear();
// console.log(setOfRollNum);

//delete
setOfRollNum.delete(22);
console.log(setOfRollNum);

let result = setOfRollNum.has(33);
console.log(result);


console.log(typeof setOfRollNum);
for (const element of setOfRollNum) {
    console.log(element);
}

//remove duplicate element from the array
var arrayNumber = [22,11,44,22,77,11];
const setNum = new Set(arrayNumber);
console.log(setNum);

//remove element using spread operator (...))
var arrayNumber = [...new Set(arrayNumber)]
console.log(arrayNumber);

