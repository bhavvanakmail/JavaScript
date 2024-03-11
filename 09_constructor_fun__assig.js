
function Bank(BankName,location,ifscCode,branchCode){
    this.BankName = BankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode
    this.show = function(){
        console.log(`bank detais is: ${this.BankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
    }

}
const yesBank = new Bank('Yes','pune','yes10113',112233);
console.log(`bank detais:- Name: ${yesBank.BankName}, Location: ${yesBank.location}, IFSC_Code: ${yesBank.ifscCode}, Branch_Code: ${yesBank.branchCode}`);
console.log("-------------------------------------------------------------------------------------------------");
const sbiBank = new Bank('SBI','Mumbai','sbi10176',445566);
console.log(`bank detais:- Name: ${sbiBank.BankName}, Location: ${sbiBank.location}, IFSC_Code:${sbiBank.ifscCode}, Branch_Code: ${sbiBank.branchCode}`);
console.log("-------------------------------------------------------------------------------------------------");

const mahaBank = new Bank('Maha','latur','maha77958',411077);
console.log(`bank detais:- Name: ${mahaBank.BankName}, Location: ${mahaBank.location}, IFSC_Code: ${mahaBank.ifscCode}, Branch_Code: ${mahaBank.branchCode}`);
console.log("-------------------------------------------------------------------------------------------------");

const axisBank = new Bank('Axis','Mumbai','axis66552',445001);
console.log(`bank detais:- Name: ${axisBank.BankName}, Location: ${axisBank.location}, IFSC_Code: ${axisBank.ifscCode}, Branch_Code: ${axisBank.branchCode}`);
console.log("-------------------------------------------------------------------------------------------------");

console.log("==============Adding new property to constructor function============================");
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank Open Time : ${sbiBank.openTime} and Close Time : ${sbiBank.closeTime}`);
console.log("-------------------------------------------------------------------------------------------------");

console.log(`Name Of The Bank : ${axisBank.BankName} and Close Time Of The Bank : ${axisBank.closeTime}`);
console.log("-------------------------------------------------------------------------------------------------");

console.log(`Name Of The Bank : ${yesBank.BankName}, Branch_Code ${yesBank.branchCode} and Open Time Of The Bank : ${axisBank.openTime}`);
