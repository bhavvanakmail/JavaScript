


let add = function(){
    console.log(`inside function expression`);

}
add();

let arrow = () => //{
    console.log(`Indside arrow function....`);

//}
arrow();

let sub = (n1,n2=1)=>{
    console.log(`substraction is:${n1-n2}`);

}
sub(20,10)
sub(40)


let square = (num)=>{
    let result = num * num
    return result;
}
let result = square(7)
console.log(result);