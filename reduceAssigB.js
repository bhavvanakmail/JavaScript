
console.log("==============================================Assignment:-3===============================================");

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
const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];


const arrayNamesWipro = arrayEmps.filter((employee)=>{
    return employee.emp_company == "Wipro" 
    
}).map((employee) => {
    return employee.emp_name;
});
console.log("employee from wipro company : ",arrayNamesWipro);

console.log("===============================step:-2========================================");

const deptItOrHr = arrayEmps.filter((employee)=>{
    return employee.emp_dept == "IT"  || employee.emp_dept == "HR"
}).map((employee) => {
    return employee.emp_name;
});
console.log("employee from IT or HR department : ",deptItOrHr);

console.log("===============================step:-3========================================");

const arrayEmpID = arrayEmps.filter((employee)=>{
    return employee.emp_id > 50 
    
}).map((employee) => {
    return employee.emp_name;
});
console.log("employees ID which is gretaer than 50 is : ",arrayEmpID);
console.log("===============================step:-4========================================");

const arrayEmpNames = arrayEmps.filter((employee)=>{
    return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")

    
}).map((employee) => {
    return employee.emp_name;
});
console.log("employees names starts with 'A','V','M' : ",arrayEmpNames);

console.log("===============================step:-5========================================");

const arrayEmpSalary = arrayEmps.filter((employee)=>{
    return employee.emp_salary 
    
}).map((employee) => {
    return employee.emp_salary;
});
// console.log(arrayEmpSalary);
const sum = arrayEmpSalary.reduce((runningTotal,value)=>{
    return runningTotal + value;

})
console.log("Average salary of all employees : ",sum/arrayEmpSalary.length);
console.log("===============================step:-6========================================");

const empSalaryIT = arrayEmps.filter((employee)=>{
    return employee.emp_dept == "IT" 
    
}).map((employee) => {
    return employee.emp_salary;
});
// console.log(empSalaryIT);
const add = empSalaryIT.reduce((runningTotal,value)=>{
    return runningTotal + value;

})
console.log("average salary of all IT department : ",add/empSalaryIT.length);