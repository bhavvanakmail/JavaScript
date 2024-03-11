console.log(`===========Assignment on Object====================`);

let professor = {
    name: "Prof. Lee",
    education: "BE",
    domain: "Information Technology",
    designation:"HOD",
    age: 29,
};
console.log(`Add five properties:`);
console.log(professor);
console.log(`==============================step -2====================`);
professor.degrees = {"Engineering":'CSS',"Adv Computing" :'Phd'};
console.log(`nested object "Degree": `);
console.table(professor);
console.log(`=======================================step -3============================================================`);
professor.Certificates = ["Hacker Rank Participation" , "certificate in IFE course" , "certificate in Adv Programming"];
console.log(`Add one array certificates => [${professor.Certificates}]`);
console.log(`=========================================step -4============================================================`);
professor.totalExperience = "14 years";
console.log(`Add new property Total Experience : ${professor.totalExperience}`);
console.log(`=========================================step -5============================================================`);
professor.degrees.Engineering = "web Designing";
console.log("modify Existing property css->web designing");
console.table(professor);
console.log(`=========================================step -6========================================================`);
professor.Certificates.push("Oracle Certified");
for (const iterator of professor.Certificates) {
    console.log(iterator);
}
console.log(`=========================================step -7============================================================`);
var lastElement = professor.Certificates[professor.Certificates.length-1]
console.log(`last element of the certificates : ${lastElement}`);

console.log(`=========================================step -8============================================================`);
console.log(`complete object : `);
console.table(professor);

console.log(`=========================================step -9============================================================`);
//professor.Certificates.push("Oracle Certified");
for (const iterator of professor.Certificates) {
    console.log(iterator);
}