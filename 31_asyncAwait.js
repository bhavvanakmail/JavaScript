async function getData(){
    const promise = new Promise( function(resolve, reject){
        resolve('Promise resolved')
        // setTimeout( ()=>{
        //     console.log('Inside setTimeout()');
        // }, 4000 );
    } );
    return promise;
}
try {
    console.log('====== try() block ========');
    const promiseData = await getData();
    console.log(promiseData);
} catch (error) {
    console.log('====== catch() block ========');
    console.log(error);
}
// const promiseData = await getData();
// console.log(promiseData);
// promiseData.then((success) =>{
//         console.log(success);
// }).catch( (failure)=>{
//     console.log(failure);
// }).finally(()=>{
//     console.log('---------- completed--------------');
// });
console.log('======= END ==========');
console.log('=======================================');
async function show(){
    console.log('show function');
    return 'I am UI Developer';
}
const result = await show();
console.log(result);