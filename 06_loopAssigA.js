console.log("==================Assignment================");

var str = "I am very good IT developer";
var count = 0;
var vowelsCap = "AEIOU";
var vowelsLower = "aeiou";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index)
    if (vowelsCap.includes(char)||vowelsLower.includes(char)) {
        count = count+1;
    }
}
console.log(`Total number of vowels are : ${count}`);

console.log(`==========================Step -2================================`);

var sum = 0;
1*1*1+2*2*2*+3*3*3+4*4*4+5*5*5
for (let index = 1; index <=5; index++) {
    sum = sum+index*index*index ; 
}
console.log(`Addition of 1 to 5 is: ${sum}`);

console.log(`=================================Step - 3====================================`);

function oddPositionChar(arg) {
    var result=""
    console.log(`Given String Is ==>>  "${arg}"`);
    for (let index = 0; index <=arg.length-1; index++) {        
        if (index%2!=0 && arg.charAt(index)!=" ") {
          var result= result+arg.charAt(index)+" "
        }
    }
    console.log(`Odd Position Characters  ==>  ${result} `);
   
console.log(`--------------------------------------------------------------------`);
 }
 oddPositionChar("Hard work always pays back");
 oddPositionChar("Soon I will be UI IT Champ");



