console.log("=====================================Assignment-2=========================================");
console.log("---------------------------------step:1------------------------------------");
let arrow = () => //{
    console.log(`Good Morning,Today Is Thursday`);

//}
arrow();
console.log("---------------------------------step:2------------------------------------");

let mult = (n1,n2,n3=1)=>{
    console.log(`Multiplication of ${n1}*${n2}*${n3} is : ${n1*n2*n3}`);

}
mult(5,5,2)
mult(10,4)

console.log("---------------------------------step:3------------------------------------");
let addition = (no1,no2,no3,no4,no5)=>{
    let result = (no1 + no2 + no3 + no4 + no5);
    return result;
}
let result = addition(100,100,200,349,756)
console.log(`Addition of 5 numbers is : ${result}`);

let add = (str1,str2,str3,str4,str5)=>{
    // let str1 = "I am ";
    // let str2 = "learning";
    // let str3 = "ES6 ";
    // let str4 = "features";
    // let str5 = "in depth";
    let res  = str1.concat(str2).concat(str3).concat(str4).concat(str5);

    return res;
}
let ans = add("I am ","learning ","ES6 ","features ","in depth")
console.log("addition of five words is : ",ans);
