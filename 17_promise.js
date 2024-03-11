

const promiseNotes = new Promise(function(resolve, reject){
    console.log(`promise is pending sate`);
    const isNotesPrepared = true;
    if (isNotesPrepared) {
        resolve(`notes is prepared and here is the notes guys...`)
    }
    else{
        reject(`sorry guys,i didnt get time ,please prepare notes yourself`)
    }
})
promiseNotes.then(function(success){
    console.log("==========================then()===============================");
    console.log(success);
    console.log(`thank you........`);

}).catch(function(failure){
    console.log(failure);
    console.log(`Are yar..........`);
}).finally(function(){
    console.log(`I must have notes.....`);
    console.log(`05_conversion.jsIn case Sir won't share it,will prepare myself`);
})