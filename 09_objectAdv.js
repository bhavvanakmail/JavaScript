
let person = {
    name: "jenny",
    age: 22,
    isMarried:true,
   city:"Pune"

};
const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values);

const valueArray = ['name', 'age', 'isMarried', 'city']
valueArray.splice(2,1,"graduation");
console.log(`replace an element isMarried into graduation  : [${valueArray}]`);

//Object.entries method

const entry = Object.entries(person);
console.log(entry);

const array0th = entry[0];
console.log(array0th);
console.log(array0th[1]);
for (const element of entry) {
    console.log(element[0],element[1]);//to traverse nested object
}

//traversing of an object....
console.log(`==========traversing of an object===================`);
for (const key in person) {
    console.log(key,person[key]);
}

console.log(`---------avilable in object or not----------------`);
const isNameAvailable = "name" in person;
console.log("name is available :",isNameAvailable);
const isPinAvailable = "pin" in person;
console.log("pin is available :",isPinAvailable);

const personJenny = {
    name: "jenny",
    age: 22,
    isMarried:true,
   city:"Pune"

};

personJenny.age = 25;
console.log(personJenny);//we update it because age is inside the const object
//personJenny = person;/not allowed / we make reference variable personjenny constant so we can not assign to the other object
//personJenny = { };not allowed to assign const object

console.log("==========freezing Method===============");
Object.freeze(personJenny);
personJenny.city = "lucknow";
console.log(personJenny);//once we freeze the object we can not change values available in the object

console.log("===========clone:-object.assign===============");
let Elon = {
    name: "elon",
    age: 54,
    isMarried:true,
   country:"USA"
}
const elonClone = Object.assign({},Elon)//create empty{} object to aceess elon values and assign new name reference variable
console.log(elonClone);
console.log("======merging an object============");
let stew = {
    name: "stew",
    age: 54,
    isMarried:true,
   country:"USA"
}

let address= {
    pin : 234567,
    city : "Austin Texas"
}

//concat or merge two object
Object.assign(stew,address);
console.table(stew);



