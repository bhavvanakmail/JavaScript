const num = 7;
function isPrimeNumber(num){
for (let index = 2; index < num; index++) {
    if (7%index==0) {
        return false;

    }
}
return true;
}

const result = isPrimeNumber(12);
console.log(`is prime no :${result}`);