var marks = 62;
// If marks greater than equal 60 
// then allow for interview else don't allow for interview
var result = marks>=60 ? "Allow for interview" : " Don't allow ";
console.log(`Marks is ${marks} ==> ${result}`);
// If number is even then return "EVEN" else "ODD"
var num = 13;
var result = num%2 == 0 ? "EVEN" : "ODD";
console.log(`Given number is ${num} ==> ${result}`);

function maleMarriageEligibility(gender,age,boyName){
    var result = gender=='Male' && age>=21
? `Hey ${boyName} you are eligible for marriage ,congrats!`
: `sorry, ${boyName} you are not eligible,try next time`;
return result;
}
var result = maleMarriageEligibility("Male","25","billgates");
console.log(result);