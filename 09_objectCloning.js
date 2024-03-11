

const person = {
    name : "Elon",
    city : "Pune",
    isMarried :true

}
person.city = "Mumbai";
console.log(person);

let firstName = "Bhavana";
let lastName = "Mali";

//cloning means copy
let myName = firstName;
console.log(myName);
firstName = "GK";
console.log(myName);

//shallow cloning
let Person = {
    name : "Elon",
    city : "Pune",
    isMarried :true

}
let elonPerson = {
    country : "USA"

};
elonPerson = Person;//shallow clone 
elonPerson.city="Mumbai";
console.log(elonPerson.city);
console.log(Person.city);

let stdBhavana = {
    name : "Bhavana",
    age : 24,
    gender : "female",
    graduation : "BSC(Computer Science)"
}
let stdDipali = {...stdBhavana};//deep clone using spread{...} operator
stdDipali.name = "Dipali";
console.log(stdBhavana.name);
console.log(stdDipali.name);

let stdJenny = {
    name : "Jenny",
    age : 24,
    gender : "female",
    marks : {
        computer : 96,
        math : 78,
        english : 56
    }
}
let stdBill = JSON.parse(JSON.stringify(stdJenny))//shallow clone using assignment(=) operator
console.log(stdBill);
stdBill.name = "Billgates";
console.log(stdJenny.name);
console.log(stdBill.name);