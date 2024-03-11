console.log("==========================step-1(create object personal Detais)=====================================");

let personalDetails = {
    firstName : "Bhavana",
    lastName : "Mali",
    age : 24,
    address : "Pune",

}
console.log("personal details :" ,personalDetails);

console.log("==========================step-2(create object college Details)=====================================");

let collegeDetails = {
    College_name : "Pratibha College of Computer Studies",
    College_address : "Chinchwad",

}
console.log("college details :",collegeDetails);

console.log("==============step-3(merge personalDetails and collegeDetails)=====================================");

Object.assign(personalDetails,collegeDetails);

console.table(personalDetails);
console.log("==========================step-4(create an array)=====================================");

let friends = ["Ashu","Prajakta","Soni","Chaitali"]
console.log(`freez array: ${friends}`);
Object.freeze(friends);
console.log("==========================step-5=====================================");
console.log(`friends name :-`);
for (const element of friends) {
    
    console.log(element);

}
console.log("==========================step-6=====================================");

const company = "Codemind Technology";
let reverse = "";
for (let index = company.length-1; index >=0; index--) {
    let char = company.charAt(index);
    if (char==' ') {
        break;
    }
    else{
        reverse = reverse + char;
    }
}
console.log("given string :" ,company);
console.log("reverse 2nd word from the given string : ",reverse);