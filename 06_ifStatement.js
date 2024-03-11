var girlAge = 19;
if (girlAge>=18) {
    console.log(`you could go inside office`);
    console.log(`have you informed your parent`);
    console.log(`signed.. Congrates!!!`);
}
console.log(`daily life`);

var elonAge = 17;
//if age is greater than equal 10 then allow for vote else no.
if (elonAge>=18) {
    console.log(`welcome.. Elon`);
    console.log(`please let me mark your finger with link`);
    console.log(`please now vote`);
} else {
    console.log(`yet you are not eligible for vote`);
    console.log(`try next time please!`);
}
console.log("================assig -2====================");
var voteEligible = function(age){
    if (age==0 || age<0 || age>130) {
        console.log(`invalid data:${age}`);
    } else {
        if (age<18) {
            console.log(`you are not eligible for vote..${age}`);
        } else {
            console.log(`you are eligible for vote..${age}`);
        }
    }

    
}
voteEligible(0);
// voteEligible(-20);
// voteEligible(130);
// voteEligible(null);
// voteEligible(undefined);
// voteEligible("jenny");
// voteEligible("infosys");
