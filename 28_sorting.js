
const freindNames = ['jenny','bill','stew','elon'];
//sorting in ascending order 
const sortedArray = freindNames.sort();
console.log(sortedArray);
console.log("------------------------------------------------------------------");
console.log(freindNames);//because of shallow clone it reffers both object

//sorting in descending array
const reverseArray = sortedArray.reverse()
console.log(reverseArray);

const array =  [29,  15, 31, 111, 27, 6];
const newArray = array.sort((a,b)=>{
    //ascending order
    return a>b ? 1 : -1;//ternary operator (?:)
//return a>b ? -1 : 1;//descending order
});
console.log(newArray[newArray.length-1]);
console.log(newArray[0]);

