


const postInString = `{
    "userid" : 1,
    "id":1,
    "title" : "on trip",
    "body" : "feeling awesome..after long break"
}`

///////////////////
const Id = "120";
let IdName = +Id;
console.log(IdName,typeof IdName);


console.log(typeof postInString);
const post = JSON.parse(postInString);
console.log(typeof post);
console.log(post);

const person = {
    name:"jenny",
    age:34,
    city:"pune"
}
const personJson = JSON.stringify(person);
console.log(typeof personJson);
console.log(personJson);

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
    
},
kidsName: ["Deny","Weny","Rony","Randy"]
}
const elonjson = JSON.stringify(personElon);
console.log(elonjson);