import { Component } from "react";

export default class IncrementCounter extends Component{
    constructor(){
        super();
        this.state = {
            counter:1
        }

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            })
        }, 1000);
    }

    render(){
        return <h1>The counter value is {this.state.counter}</h1>
    }
}

// import { Component } from "react";

// export default class IncrementCounter extends Component {
//     constructor() {
//         super();
//         this.state = {
//             counter: 1
//         }
//     }

//     render() {
//         return <h1>This is Header Component: {this.state.counter}</h1>
//     }
// }