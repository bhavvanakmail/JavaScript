
var displayDay = function(dayNum){
switch (dayNum) {
    case 1:
        console.log(`Monday`);
        break;
    case 2:
        console.log(`Tuesday`);
        break;
    case 3:
        console.log(`wednusday`);
        break;
        
    case 4:
        console.log(`Thursday`);
        break;
    case 5:
        console.log(`friday`);
        break;
    case 6:
        console.log(`saturday`);
        break;
    case 7:
        console.log(`sunday`);
        break;
    
    default:
        console.log(`Invalid Data:${dayNum}`);
        break;
}
}
displayDay(2);
displayDay(7);
displayDay(9);