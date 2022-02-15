var EMP = (function () {
    var empName = "Ram";
    var empAge = 30;
    var empDesgn = "Manager";

    function getEmps() {
        document.getElementById("result").innerHTML = `The name of employee is ${empName}. His age is ${empAge} and he is a ${empDesgn}.`;
        console.log("Success");
    }

    function clear() {
        document.getElementById("result").innerHTML = "";
        console.log("cleared");
    }

    return {
        getEmployee: getEmps,
        clearDetails: clear
    }
})();