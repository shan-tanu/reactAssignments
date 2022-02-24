import Employee from "./Employee";

export default function EmployeeList(props){
    return (
        <div>
            <h1>Employee List is given below.</h1>
            {
                props.emplist.map(function(employee){
                    return (
                        <Employee {...employee}/>
                    )
                })
            }
        </div>
    );
}