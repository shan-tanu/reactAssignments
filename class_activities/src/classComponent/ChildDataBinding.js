import { Component } from "react";

export default class ChildDataBinding extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
                <h3>The data passed to child is {this.props.name}</h3>
            </>
        )
    }
}
