

function jennyHomeWork(callback){
    console.log('jenny started assignments');
    console.log(`her assignment solving is in progress`);
    console.log(`jenny's assignment is completed`);
    callback();
    return function(){
        console.log(`yahoo. we both completed assignment`);
    }
}

let elonCopyHomework = function(){
    console.log(`thank you jenny for calling me back`);
    console.log(`elon started copying assignments`);
    console.log(`elon copied all assignments`);
}
// const result = jennyHomeWork(elonCopyHomework);
// result();

jennyHomeWork(elonCopyHomework)();




