// //module pattern after ES6 implemented using classes

// class Employee {
//     constructor(name, age, phone, address, designation) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.phone = phone;
//         this.designation = designation;
//     }

//     getEmployeePersonal() {
//         return `The name of employee is ${name}. The age is ${age}. The address is ${address}`;
//     }

//     getEmployeeOfficial() {
//         return `The name of employee is ${name}. The phone number is ${phone}. The designation is ${designation}`;
//     }


// }
// export default Employee;
class a {
    constructor() {
        this.alist = ["a", "b", "c"];
    }

    getAList() {
        return this.alist.join(", ");
    }

    addItem(item) {
        this.alist.push(item);
    }

}
export default a;