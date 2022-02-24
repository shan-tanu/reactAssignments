export default function DataBinding() {

    var username = "Shantanu";
    var counter = 0;
    // setInterval(() => {
    //     counter+=1;
    //     console.log(counter);
    // }, 1000);

    function getChangedValue() {
        username = "hero";

        setTimeout(() => {
            alert(username);
        }, 5000);
    }

    return (
        <div>
            <h1>The counter value is {counter}</h1>
            Enter name : <input type="text" value={username} onChange={getChangedValue}></input>
        </div>
    )
}