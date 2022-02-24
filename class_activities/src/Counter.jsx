import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { counter: state.counter + 1, show: state.show };

        case "toggle":
            return { counter: state.counter, show: !state.show };

        default:
            return state;
    }
}

const Counter = (props) => {
    const [state, dispatch] = useReducer(reducer, { counter: 0, show: false });

    // props.details.user = "Hello";
    console.log(props.details);

    return (
        <div>
            <h1>The counter value is : {props.user}</h1>
            <p>{props.sample[1]}</p>
            <p>{state.counter}</p>
            <button onClick={() => {
                dispatch({ type: "increment" });
                dispatch({ type: "toggle" });
            }}>Click me to increment</button>
            <br />
            {state.show && <p>The text to be shown</p>}
        </div>
    );
}

export default Counter;