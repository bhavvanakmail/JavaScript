console.log("----------------step-1(Object banksbi created--------------------");

let bankSbi = {
    branchName: "Ravet SBI",
    branchManager: "Mr.vinayak",
    contactDetails : 8677958697,
    ISC_Code: "SBI00010113",


};

console.log("----------------step-2(Object bankLocation created--------------------");

let bankLocation = {
    street: "Ravet",
    city: "Pune",
    pinCode: 411033
}
console.log("----------------step-3(clone Object banksbi and bankLocation --------------------");

const clone_object = Object.assign({},bankSbi,bankLocation)
console.table(clone_object);

console.log("----------------step-4(Create Object rateOfInterest --------------------");
let rateOfInterest = {
    homeLoanInterest: '10%',
    personalLoanInterest: '11%',
    dueiInterest: '15%'

}
console.log("----------------step-5(merge step1,2 and into new object sbiDetails) --------------------");

const  sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest)
console.table(sbiDetails);

console.log("----------------step-6(traverse object sbiDetails) --------------------");

for (const key in sbiDetails) {
    console.log(key,sbiDetails[key]);
}