//in js we call  function as first class citizen

//1.function can be stored in a variable(function Expression)
//2.function can be passed as an argument to another function (eg.callback)
//3.a function can return another function

function outer(){
    console.log(`inside outer function`);
    return function(){
    console.log(`inside inner function`);
}

}
outer()();