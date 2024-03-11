const person = {
    name : "Elon musk",
    age : 54,
    totalCompany : 9
     
}
function show(greet){
    console.log(`inside show function...`);
    console.log(greet);
    console.log(this.name,this.age);
}
//call() method
show.call(person,'good morning');

console.log("================================================");

//apply() method
function details(sonName,wifeName){
    console.log(this.name,this.age);
    console.log(`son name : ${sonName}, wife name : ${wifeName}`);
}
details.apply(person,['x','jenny']);

console.log("================================================");

//bind()method
const stewPerson = {
    name : "Stew jobs",
    age : 54,
    companyName : "Apple"
     
}
function productsDetails(iphone,laptop){
console.log(this.name,this.companyName);
console.log(`Iphone : ${iphone}, Laptop : ${laptop}`);
}
const newFunction = productsDetails.bind(stewPerson);
newFunction(`iphone 15`,`Mac book m2`);
