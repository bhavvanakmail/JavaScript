
class Person{
    //properties
    firstName
    lastName
    city
    graduation

    //constructor
    constructor(firstName,lastName,city,graduation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.graduation = graduation;

    }
    //methods
    details() {
        console.log(`Details :${this.firstName},${this.lastName},${this.city},${this.graduation}`);

    }
}

const personElon = new Person('Elon','musk','austin', 'msc physics');
console.log(personElon.details());
console.log(`Elon Details : ${personElon.firstName}, ${personElon.lastName},${personElon.city},${personElon.graduation}`);
const PersonStew = new Person('stew','job','san francisco','dropout');
console.log(PersonStew);

const PersonBill = new Person('Bill','Gates','san francisco','dropout');
console.log(PersonBill);

const PersonRatanSir = new Person('Ratan','Tata','Mumbai','dropout');
console.log(PersonRatanSir);
console.log("===============traverse array=======================================================");
const arrayPerson = [personElon,PersonStew,PersonBill,PersonRatanSir];
for (const element of arrayPerson) {
    element.details();
}




function traverseObject(objectPerson){
    for (const key in objectPerson) {
       console.log(key,objectPerson);
        }
    }
    traverseObject(PersonRatanSir)
    traverseObject(personElon)
