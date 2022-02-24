export default function AutoCounter(props) {
    return <p>The counter value is {props.val}</p>
}

class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

}