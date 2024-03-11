

function bank(b_name,city,pin){
    this.b_name = b_name;
    this.city = city;
    this.pin = pin;
    this.show = function(){
        console.log(`bank detais is: ${this.b_name} ${this.city} ${this.pin}`);
    }

}
const sbiBank = new bank('SBI','pune',112233);
console.log(sbiBank);
console.log(sbiBank.b_name,sbiBank.city,sbiBank.pin);

const axisBank = new bank('Axis','Mumbai',445566);
console.log(axisBank);

const hdfcBank = new bank('Axis','Mumbai',445566);
console.log(hdfcBank);

console.log("==============Adding new property to constructor function============================");
bank.prototype.country = "Bharat";
console.log(axisBank.country);
console.log(hdfcBank);
console.log(hdfcBank.country);

console.log("===============================================");
sbiBank.show();
axisBank.show();
console.log("===========instanceof is used to check type of object==================");
console.log(axisBank instanceof bank);

console.log("=============push element in the array==================================");

const array = [1,20,40,50];
console.log(array.length);
array.push(100);

console.log(array);