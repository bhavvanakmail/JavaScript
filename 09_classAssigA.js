console.log(`=========================================Assignment on Class=====================================`);

class Vehicle{
    //properties
    Name
    color
    speed
    fuelType

    //constructor
    constructor(Name,color,speed,fuelType){
        this.Name = Name;
        this.color = color;
        this.speed = speed;
        this.fuelType = fuelType;

    }
    //methods
    details() {
        console.log(`Details :${this.Name},${this.color},${this.speed},${this.fuelType}`);

    }
}

const Vehicle1 = new Vehicle('Mahindra','White','210km/hr', 'Petrol');
console.log(`Vehicle1 Details :- Name: ${Vehicle1.Name}, Color: ${Vehicle1.color}, Speed: ${Vehicle1.speed}, Fuel Type: ${Vehicle1.fuelType}`);

const Vehicle2 = new Vehicle('Honda','Grey','300km/hr', 'Petrol');
console.log(`Vehicle2 Details :- Name: ${Vehicle2.Name}, Color: ${Vehicle2.color}, Speed: ${Vehicle2.speed}, Fuel Type: ${Vehicle2.fuelType}`);

const Vehicle3 = new Vehicle('Maruti Suzuki','White','270km/hr', 'Petrol');
console.log(`Vehicle3 Details :- Name: ${Vehicle3.Name}, Color: ${Vehicle3.color}, Speed: ${Vehicle3.speed}, Fuel Type: ${Vehicle3.fuelType}`);

const Vehicle4 = new Vehicle('Mercedes-Benz','Black','350km/hr', 'Petrol');
console.log(`Vehicle4 Details :- Name: ${Vehicle4.Name}, Color: ${Vehicle4.color}, Speed: ${Vehicle4.speed}, Fuel Type: ${Vehicle4.fuelType}`);

const Vehicle5 = new Vehicle('BMW','Blue','400km/hr', 'Petrol');
console.log(`Vehicle5 Details :- Name: ${Vehicle5.Name}, Color: ${Vehicle5.color}, Speed: ${Vehicle5.speed}, Fuel Type: ${Vehicle5.fuelType}`);




console.log(`==================================step:-2========================================`);

class College{
    //properties
    Name
    University
    Location
    Pincode
    

    //constructor
    constructor(Name,University,Location,Pincode){
        this.Name = Name;
        this.University = University;
        this.Location = Location;
        this.Pincode = Pincode;

    }
    //methods
    display() {
        console.log(`Details :${this.Name},${this.University},${this.Location},${this.Pincode}`);

    }
}

const College1 = new College('JSPM college','SPPU','PUNE', '411039');
console.log(`College1 Details :- Name: ${College1.Name}, University: ${College1.University}, Location: ${College1.Location}, Pincode : ${College1.Pincode}`);

const College2 = new College('Forguson College','PUNE University','PUNE', '411553');
console.log(`College2 Details :- Name: ${College2.Name}, University: ${College2.University}, Location: ${College2.Location}, Pincode : ${College2.Pincode}`);

const College3 = new College('Pratibha College','SPPU','PUNE', '411422');
console.log(`College3 Details :- Name: ${College3.Name}, University: ${College3.University}, Location: ${College3.Location}, Pincode : ${College3.Pincode}`);

const College4 = new College('Dy patil college','Kolhapur University',' kolhapur', '416001');
console.log(`College4 Details :- Name: ${College4.Name}, University: ${College4.University}, Location: ${College4.Location}, Pincode: ${College4.Pincode}`);



console.log("=============================step:-3=======================================================");

function traverseObject(CollegeObj){
    
    for (const key in CollegeObj) {
            console.log(`${key} :- ${CollegeObj[key]}`);

        
        }
    }
    traverseObject(College1);
    console.log(`------------------------------------------------------------------------------------`);
    traverseObject(College2)
    console.log(`------------------------------------------------------------------------------------`);
    traverseObject(College3)
    console.log(`------------------------------------------------------------------------------------`);
    traverseObject(College4)


    console.log(College4 instanceof College);

    