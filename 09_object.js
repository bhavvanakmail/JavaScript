
//object creation using object literals
let person = {
    name: "jenny",
    age: 22,
    isMarried:true,
    show:function() {
        console.log(`Hi hello,How are you?`);
    }

};
console.log(typeof person);
console.log("-----------------------------------------------");
console.log(person);

//property access
//1.dot notation
let personName = person.name;
console.log(`person name is : ${personName}`);
console.log(`person age is : ${person.age}`);

//1.[]notation
let nameOfPerson = person["name"];
console.log(`person name is : ${nameOfPerson}`);
console.log("-----------------------------------------------");

//Adding property in object
person.city = "Pune";
console.log(person);
console.table(person);
console.log("-----------------------------------------------");

//update property in object
console.log(`update property in object`);
person.age = 20;
console.log(person);
console.log("-----------------------------------------------");

//delete property from the object
console.log(`delete property from the object`);
delete person.age;
console.log(person);
console.log("-----------------------------------------------");

//creating an empty object

let employee = {}
employee.name = "Mohit";
console.log(employee);
console.log("-----------------------------------------------");

//Adding Method
console.log(`Adding method in an object`);
person.show();
person.display=function() {
    console.log(`I am inside display function`);
}
console.log(person);
person.display();


//nested object
console.log("================nested object=========================");
const personElon = {
    name: "Elon Musk",
    age: 54,
    totalcompany: 9,
    companies:{
    tesla: {
        companyName:"Tesla",
        totalEmployee: 4500,
        location:"USA",

    },
    twitter: "150B USD",
    spacex: "200B USD"
    
},
kidsName: ["Deny","Weny","Rony","Randy"]
}
console.log(personElon.companies.tesla);
console.log("-----------------------------------------------");
console.log(personElon.kidsName[0]);
console.log("-----------------------------------------------");
console.log(personElon.kidsName.length);
console.log("-----------------------------------------------");
//add name="stew" in the kidsName at the last position
personElon.kidsName.push("stew");

for (const iterator of personElon.kidsName) {
    console.log(iterator);
}
console.log("-----------------------------------------------");
console.log(`location : ${personElon.companies.tesla.location}`);
console.log("-----------------------------------------------");
var lastElement = personElon.kidsName[personElon.kidsName.length-1]
console.log(lastElement);