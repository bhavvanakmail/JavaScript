
const array = [1,2,3,4,2,3,6,1];
const uniqueSet = new Set(array);
const backToArray = [...uniqueSet];
console.log(backToArray);

// const arr = [10,22,3,4,10,4,6,3,5];
// const ans = Array.from(new Set(arr));
// console.log(ans);


let str = "bhavana mali";
let result = str.split('').map((char,index)=>index == 0 ? char.toUpperCase() : char).join('');
console.log(result);


