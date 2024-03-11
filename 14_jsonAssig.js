const personAleix= `{   
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" : ["Dev","DBA"],
    "age" :23,
    "Doj" :"11-12-2019",
    "married" : "false",
    "address" : {
        "street" : "32,Laham St.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" : "E0012"
}`//JSON string specify under the bactic(``)

console.log(typeof personAleix);//JSON string
console.log("=====================(step-1):convert json string into object====================");
const post = JSON.parse(personAleix);
console.log(typeof post);//convert JSON String into javascript Object
console.log(post);

console.log("====================(step-2):log on console role 'DEV'===========================");
console.log(post.role[0]);

// const roleArray = postInString.split('"role": ["')[1].split('" , "DBA"]')[0];
// console.log(roleArray); // Output: Dev

// const role1 = JSON.parse(postInString).role[0];
// console.log(`Display The Role :=> "${role1}" `)

console.log(`---------Q.4 Display Last Name------------`);
const lastName = JSON.parse(personAleix).name.split(" ")[1];
console.log(`Display the Last Name :=> "${lastName}" `);
console.log(`\n`)