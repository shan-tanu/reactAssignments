import { Component } from "react";
import ChildBinding from "../ChildBinding";

export default class DataBinding extends Component {
    constructor() {
        super();
        this.state = {
            name: ""
        };
    };

    nameChange(event){
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return (
            <>
                <label>Enter name</label>
                <input onChange={(event) => this.nameChange(event)} />
                <br />
                <p>The name entered is {this.state.name}</p>
                <br/><br/>
                <h2>The Child Component</h2>
                <ChildBinding name={this.state.name}/>
            </>
        );
    }
}