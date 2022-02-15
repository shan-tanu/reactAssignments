import a from "./employeeClass";

var atemp = new a;
console.log(atemp.getAList);







// var employees = [];

// function addEmployee() {
//     var name = document.getElementById('name').value;
//     var age = document.getElementById('age').value;
//     var address = document.getElementById('address').value;
//     var phone = document.getElementById('phone').value;
//     var designation = document.getElementById('designation').value;
//     var newEmp = new Employee(name, age, address, phone, designation);
//     employees.push(newEmp);
// }

// function getPersonalList() {
//     var htmlValue = "";
//     employees.forEach(element => {
//         htmlValue += element.getPersonalList() + "<br/>";
//     });
//     document.getElementById("result1").innerHTML = htmlValue;
//     console.log("Success Personal");
// }

// function getOfficialList() {
//     var htmlValue = "";
//     employees.forEach(element => {
//         htmlValue += element.getOfficialList() + "<br/>";
//     });
//     document.getElementById("result1").innerHTML = htmlValue;
//     console.log("Success Official");
// }

// function clearDetailsOff() {
//     document.getElementById("result1").innerHTML = "";
//     console.log("Cleared complex");
// }

