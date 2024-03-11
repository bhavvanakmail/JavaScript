console.log("=================Assignment-1====================");
var monthOfYear = function(month){
    switch (month) {
        case 1:
            console.log(`january`);
            break;
        case 2:
            console.log(`february`);
            break;
        case 3:
            console.log(`march`);
            break;
            
        case 4:
            console.log(`April`);
            break;
        case 5:
            console.log(`May`);
            break;
        case 6:
            console.log(`June`);
            break;
        case 7:
            console.log(`July`);
            break;
        case 8:
            console.log(`August`);
            break;
        case 9:
            console.log(`September`);
            break;
        case 10:
            console.log(`October`);
            break;
        case 11:
            console.log(`November`);
            break;
        case 12:
            console.log(`December`);
            break;
        
        
        default:
            console.log(`Invalid Data : ${month}`);
            break;
    }
    }
    monthOfYear(0);
    monthOfYear(2);
    monthOfYear(5);
    monthOfYear(12);
    monthOfYear(15);
    monthOfYear(100);
    monthOfYear(null);
    monthOfYear(undefined);