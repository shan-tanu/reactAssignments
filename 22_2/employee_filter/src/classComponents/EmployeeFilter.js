import { Component } from "react";
import EmployeeListComponent from '../EmployeeListComponent';

import empList from "../../src/data/employeeList";

// var globalState = {
//     employees: empList
// }

export default class EmployeeFilter extends Component {
    constructor() {
        super();
        this.globalState = empList;
        this.state = {employees: empList};
    };

    changedSearch = (event) => {
        var searchStr = event.target.value;
        if (searchStr === "") {
            this.setState({employees: this.globalState});
        } else {
            var updatedState = this.globalState.filter(x => x.name.toLowerCase().includes(searchStr.toLowerCase()));
            this.setState({employees: updatedState});
        }
    }


    render() {
        return (
            <>
                <h1 style={{margin: "20px 12px", textAlign: "center", fontFamily: "'Fira Sans', sans-serif"}}>Employee Filter Application</h1><br/>
                {/* <!-- Search form --> */}
                <div style={{margin:"16px 14px", padding:"12px"}}>
                    <h4>Enter name/keyword to search for :</h4>
                    <input className="form-control" type="text" placeholder="Name" width="50px" aria-label="Search" onChange={this.changedSearch} style={{marginTop:"16px"}}/>
                </div>
                <EmployeeListComponent listOfEmployees={this.state.employees} />
            </>
        )
    }
}

