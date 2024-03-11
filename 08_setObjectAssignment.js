console.log("==========================Assignment on Set=============================");

class Bank{

    BankName
    location
    account_no
    ifscCode
    interest_rate

    
constructor(BankName,location,account_no,ifscCode,interest_rate){
    this.BankName = BankName;
    this.location = location;
    this.account_no = account_no
    this.ifscCode = ifscCode;
    this.interest_rate = interest_rate
}
}
const axis_bank = new Bank('Axis Bank','pune','axis10113',112233,"12%");
console.log(`bank detais:- Name: ${axis_bank.BankName}, Location: ${axis_bank.location},Account no : ${axis_bank.account_no}, IFSC_Code: ${axis_bank.ifscCode}, interest rate: ${axis_bank.interest_rate}`);
console.log("-------------------------------------------------------------------------------------------------");


const sbi_bank = new Bank('SBI Bank','nagpur','sbi10223',442833,"10%");
console.log(`bank detais:- Name: ${sbi_bank.BankName}, Location: ${sbi_bank.location},Account no : ${sbi_bank.account_no}, IFSC_Code: ${sbi_bank.ifscCode}, interest rate: ${sbi_bank.interest_rate}`);
console.log("-------------------------------------------------------------------------------------------------");


const icici_bank = new Bank('ICICI Bank','pune','icici17113',51268,"16%");
console.log(`bank detais:- Name: ${icici_bank.BankName}, Location: ${icici_bank.location},Account no : ${icici_bank.account_no}, IFSC_Code: ${icici_bank.ifscCode}, interest rate: ${icici_bank.interest_rate}`);
console.log("-------------------------------------------------------------------------------------------------");


const kotak_bank = new Bank('Kotak Bank','dhule','kotak10113',731095,"7%");
console.log(`bank detais:- Name: ${kotak_bank.BankName}, Location: ${kotak_bank.location},Account no : ${kotak_bank.account_no}, IFSC_Code: ${kotak_bank.ifscCode}, interest rate: ${kotak_bank.interest_rate}`);
console.log("-------------------------------------------------------------------------------------------------");


const hdfc_bank = new Bank('HDFC Bank','chinchwad','hdfc10113',67893,"12%");
console.log(`bank detais:- Name: ${hdfc_bank.BankName}, Location: ${hdfc_bank.location},Account no : ${hdfc_bank.account_no}, IFSC_Code: ${hdfc_bank.ifscCode}, interest rate: ${hdfc_bank.interest_rate}`);
console.log("-------------------------------------------------------------------------------------------------");


const panjab_bank = new Bank('Punjab Bank','punjab','axis10113',112233,"12%");
console.log(`bank detais:- Name: ${panjab_bank.BankName}, Location: ${panjab_bank.location},Account no : ${panjab_bank.account_no}, IFSC_Code: ${panjab_bank.ifscCode}, interest rate: ${panjab_bank.interest_rate}`);
console.log("-------------------------------------------------------------------------------------------------");

const setOfBank = new Set();
setOfBank.add(axis_bank);
setOfBank.add(sbi_bank);
setOfBank.add(icici_bank);
setOfBank.add(kotak_bank);
setOfBank.add(hdfc_bank);
setOfBank.add(panjab_bank);

console.log(setOfBank);
console.log(`total element in set is :${setOfBank.size}`);
console.log("==================traverse and log the bank name and bank_location====================");
for (const element of setOfBank) {
    console.log(`Bank Name : ${element.BankName}, Bank Location : ${element.location}`);
}
