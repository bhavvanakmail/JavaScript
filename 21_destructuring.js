

let person = {
    name : 'jenny',
    age : 47,
    ismarried : 'true',
    city : 'pune',
    pin : 422044
};
// const name = person.name;
// const age = person.age;
// const ismarried = person.ismarried;
// const city = person.city;

let {name,age,ismarried,city="Mumbai",country="Bharat"} = person;// destructuring with default value
console.log(name,age,ismarried,city,country);

const arr = ['mona','sona','tona','bawa'];
let[element1,element2,element3,element4,element5='khona'] = arr;// array destructuring with default value
console.log(element1,element2,element3,element4,element5);