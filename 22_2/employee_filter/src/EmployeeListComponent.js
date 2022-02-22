import EmployeeDetailsComponent from "./EmployeeDetailsComponent";

export default function EmployeeListComponent(props) {
    //debugger;
    return (
        <div>
            <br /><hr style={{border:"3px solid white", borderRadius:"10px", margin: "auto",width:"50%"}} /><br/>
            <p className="h5" style={{ margin: "10px 14px", color:"white"}}>The employees according to the query are :</p>

            <div style={{ textAlign: "left", padding: "20px 16px", }}>
                {props.listOfEmployees.map(function (employee) {
                    return (
                        <EmployeeDetailsComponent {...employee}></EmployeeDetailsComponent>
                    )
                })}
            </div>
        </div>
    )
}