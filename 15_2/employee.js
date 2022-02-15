var EMP = (function(){
    var employees = ["alpha", "beta", "gamma"];
    function getEmps(){
        employees.forEach(element => {
            console.log(element);
        });        
    }

    return{
        getEmployee: getEmps
    }
})();