let bankSbi ={
    BankName : "SBI Bank",
    contact : 4488225566,
    ifscCode : "sbi10176",
    branchCode : 445566
  
}
console.log(`1st Object bankSbi:- Name: ${bankSbi.BankName}, contact: ${bankSbi.contact}, IFSC_Code:${bankSbi.ifscCode}, Branch_Code: ${bankSbi.branchCode}`);
console.log("-------------------------------------------------------------------------------------------------");

let bankLocation = {
    street : "Akurdi",
    city : "Pune",
    Pin_code : 411033
}
console.log(`2nd Object bank_location :- street: ${bankLocation.street}, city : ${bankLocation.city}, Pin_Code: ${bankLocation.Pin_code}`);
console.log("================================step 3()clone step1 and step2 using object.assign()============================================");
Object.assign(bankSbi,bankLocation);
console.table(bankSbi);
console.log("--------------------------clone object using spread operator-----------------------------------------------------------------------");

let bank = {...bankLocation};//deep clone using spread{...} operator

console.log(`object clone using spread operator :`);
console.log(bank);
console.log("-------------------------------step 4()--------------------------------");
let rateOfInterest ={
    homeLoanInterest : "4.2%",
    personalLoanInterest : "10%",
    duelInterest : "6.2%"
}
console.log(`creating object rateOfInterest : ${rateOfInterest}`);
console.log("-------------------------------step 5()--------------------------------");

let sbiDetails = Object.assign(bankSbi,bankLocation,rateOfInterest);
console.table(sbiDetails);
console.log("-------------------------------step 6()--------------------------------");

function traverseObject(objSbiDetails){
    
    for (const key in objSbiDetails) {
            console.log(`${key} :- ${objSbiDetails[key]}`);

        
        }
    }
    traverseObject(sbiDetails);
    