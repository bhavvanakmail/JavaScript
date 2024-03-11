

const arrayNum = [10, 20 ,30, 40, 50, 15 ];

arrayNum.forEach( function( currentValue, index, array ){
    console.log(`Current Value: ${currentValue}, Index: ${index}, arrayNum`, array);
} )
arrayNum.forEach( ( currentValue, index, array  ) => {
    console.log(`Current Value: ${currentValue}, Index: ${index}, arrayNum`, array);
} );

console.log(` =============== `);
arrayNum.forEach( (currentValue )=>{
    console.log(currentValue);
} )

console.log(`======== forEach() loop to traverse Set  ===============`);
const setOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);

setOfRollNum.forEach( (value)=> {
    console.log(value);
} )

console.log(`======== forEach() loop to traverse Set  ===============`);
const seOfRollNum = new Set();
setOfRollNum.add(11);
setOfRollNum.add(22);
setOfRollNum.add(11);
setOfRollNum.add(33);
setOfRollNum.add(22);
setOfRollNum.add(44);
setOfRollNum.add(55);

setOfRollNum.forEach( (value)=> {
    console.log(value);
} )