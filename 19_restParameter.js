// function show(n1,n2,n3,n4,n5){
//     console.log(n1,n2,n3,n4,n5);

// }
// show(100,200,300,400,500)
console.log("=================rest parameter(..variableName)==================================");
function show(n1,n2,...n){
    console.log(n1,n2,n);

}
show(100,200,300,400,500)

function arr(n1,n2,...n){
    console.log(n1,n2,n);
    for (const elements of arr) {
        console.log(elements);
    }

}
show[100,200,300,400,500]