function employeeModule() {
    var name, age, address, desgn, salary, bonus;

    function getEmployee() {
        return `The name of the employee is ${this.name} and he/she is a ${this.desgn}.`;
    }

    function setEmployee(name, age, address, desgn, salary) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.desgn = desgn;
        this.salary = salary;
    }

    function getPersonalDetails() {
        return `${this.name} is ${this.age} years old and lives in ${this.address}.`;
    }

    function getBonus() {
        //complex logic for calculating bonus
        this.bonus = this.salary*0.3;
        return `The bonus of ${this.name} is Rs.${this.bonus}.`
    }

    return {
        detailEmployee: getEmployee,
        addEmployee: setEmployee,
        personalDetails: getPersonalDetails,
        listBonus: getBonus
    }
};

var emp1 = new employeeModule();
emp1.addEmployee("Aman",25,"Delhi, India","trainee",2000);
var result = emp1.detailEmployee();
console.log(result);
result = emp1.personalDetails();
console.log(result);
result = emp1.listBonus();
console.log(result);