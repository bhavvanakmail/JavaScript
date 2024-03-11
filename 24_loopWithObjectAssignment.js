console.log("-------------------------------Assignment :1--------------------------------------------------------------------");

//Snamke Case : variavle naming
class Employee{
    emp_id
    emp_name
    emp_dept
    emp_salary
    emp_company

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }

}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");

console.log("=====================step:1=(Employees working in TCS)=============================================");
const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

arrayEmployee.forEach((employee)=>{
    if (employee.emp_company == "TCS") {
        console.log(`Employee name : ${employee.emp_name}, Company : ${employee.emp_company}`);
    }
})
console.log("------------------------------------------------------------------------------------------------------");
console.log("=====================step:2=(Finance department employee)=============================================");
arrayEmployee.forEach((employee)=>{
    if (employee.emp_dept == "Finance") {
        console.log(`Employee department : ${employee.emp_dept} , Employee name : ${employee.emp_name}`);
    }
})
console.log("------------------------------------------------------------------------------------------------------");
console.log("=====================step:3=(Employee whose name starts with 'R')=====================================");

arrayEmployee.forEach((employee)=>{
    if (employee.emp_name.startsWith("R")) {
        console.log(`Employee_Id : ${employee.emp_id}, Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);
    }
})
console.log("------------------------------------------------------------------------------------------------------");
console.log("=====================step:4=(Employee whose salary is greater than 75000)=============================");
arrayEmployee.forEach((employee) => {
    if (employee.emp_salary > 75000) {
      console.log(`Employee Name :- ${employee.emp_name}, Comapny:- ${employee.emp_company}, Salary:- ${employee.emp_salary}`);
    }
  });
  console.log("------------------------------------------------------------------------------------------------------");
  console.log("=====================step:2=(Finance department employee)=============================================");
  arrayEmployee.forEach((employee)=>{
      if (employee.emp_dept == "Finance") {
          console.log(`Employee department : ${employee.emp_dept} , Employee name : ${employee.emp_name}`);
      }
  })
  console.log("------------------------------------------------------------------------------------------------------");
  console.log("=====================step:3=(Employee whose name starts with 'R')=====================================");
  
  arrayEmployee.forEach((employee)=>{
      if (employee.emp_name.startsWith("R")) {
          console.log(`Employee_Id : ${employee.emp_id}, Name : ${employee.emp_name}, Department : ${employee.emp_dept}, Salary : ${employee.emp_salary}, Company : ${employee.emp_company}`);
      }
  })
  console.log("------------------------------------------------------------------------------------------------------");
  console.log("=====================step:4=(Employee whose salary is greater than 75000)=============================");
  arrayEmployee.forEach((employee) => {
      if (employee.emp_salary > 75000) {
        console.log(`Employee Name :- ${employee.emp_name}, Comapny:- ${employee.emp_company}, Salary:- ${employee.emp_salary}`);
      }
    });
    console.log("------------------------------------------------------------------------------------------------------");
    console.log("=============step:5=(Employee whose salary is greater than or equal 50000 & from IT Department)========");
    arrayEmployee.forEach((employee) => {
      if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
        console.log(`Employee Id:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_company}`);
      }
    });
    console.log("------------------------------------------------------------------------------------------------------");
    console.log("=============step:6=(The employees from company 'Infy')===============================================");
    arrayEmployee.forEach((employee) => {
      if (employee.emp_company == "Infy") {
        console.log(`Employee Id:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_company}`
        );
      }
    });
  console.log("------------------------------------------------------------------------------------------------------");
  console.log("=============step:6=(The employees from company 'Infy')===============================================");
  arrayEmployee.forEach((employee) => {
    if (employee.emp_company == "Infy") {
      console.log(`Employee Id:- ${employee.emp_id}, Name:- ${employee.emp_name}, Department:- ${employee.emp_dept}, Salary:- ${employee.emp_salary}, Company:- ${employee.emp_company}`
      );
    }
  });