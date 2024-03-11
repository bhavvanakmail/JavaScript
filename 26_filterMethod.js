

const array =  [42,  50, 3, 2, 7, 22, 11, 40];
const arrayNum = array.filter( (currentValue )=> {
    return currentValue > 10;
} );
console.log(arrayNum)


const arr = [42,  50, 3, 2, 7, 22, 11, 40];

const even = arr.filter(currentValue => {
  return currentValue % 2 == 0;
});

console.log(even);
console.log("===================================================================");
//give me the salary list of TCS employee
//1.salary list
//2.only TCS employee
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

const arrayTcsEmployee = arrayEmployees.filter((employee)=>{
    return employee.emp_company == "TCS" 
    
});
console.log(arrayTcsEmployee);
const arrayTcsSalary = arrayTcsEmployee.map((employee)=>{
    return employee.emp_salary;

});
console.log(arrayTcsSalary);

//give me the list of 'infy' employees name

const arrayNamesInfy = arrayEmployees.filter((employee)=>{
    return employee.emp_company == "Infy" 
    
}).map((employee) => {
    return employee.emp_name;
});
console.log(arrayNamesInfy);

