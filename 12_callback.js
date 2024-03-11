

function jennyHomeWork(callback){
    console.log('jenny started assignments');
    console.log(`her assignment solving is in progress`);
    console.log(`jenny's assignment is completed`);
    callback();
}

let elonCopyHomework = function(){
    console.log(`thank you jenny for calling me back`);
    console.log(`elon started copying assignments`);
    console.log(`elon copied all assignments`);
}
jennyHomeWork(elonCopyHomework);

//1sec = 1000(ms) miliseconds
let intervalID = setTimeout(function(){
    console.log(`inside callback function`);
},3000);
// clearTimeout(intervalID);//stop callback


