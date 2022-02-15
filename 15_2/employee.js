var EMP = (function () {
    var emps = [{ empName: "Ram", empAge: 30, empDesgn: "Manager" }];

    function getEmps() {
        var htmlValue = "";
        emps.forEach(element => {
            htmlValue += `The name of employee is ${element.empName}. His age is ${element.empAge} and he is a ${element.empDesgn}.` + "<br/>";
        });
        document.getElementById("result").innerHTML = htmlValue;
        console.log("Success");
    }

    function clear() {
        document.getElementById("result").innerHTML = "";
        console.log("cleared");
    }

    function addEmp(name, age, desgn) {
        console.log(name, age, desgn);
        var newEmp = { empName: name, empAge: age, empDesgn: desgn };
        emps.push(newEmp);
    }

    return {
        getEmployee: getEmps,
        clearDetails: clear,
        addEmployee: addEmp
    }
})();