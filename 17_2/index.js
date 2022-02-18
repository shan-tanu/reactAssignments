var inputValue = "";

//getter and setter
// (self understanding)
//getter gets value of user input from <input> box. Input box is the parent.
//setter sets/updates the value of the <input> box, the parent based on changes in the variable.

//the getter function. It gets value from the user input box and updates the variable.
function updateVar(){
    inputValue = document.getElementById("changeBox").value;
    document.getElementById("inputValueDisplay").innerHTML = inputValue;
}

//the setter function sets the value in the variable to the input box.
function inputValueSetter(randomValue){
    //this updates the variable
    inputValue = randomValue;

    //this updates the HTML display of the 
    document.getElementById("inputValueDisplay").innerHTML = inputValue;
    document.getElementById("changeBox").value = randomValue;    
}

setInterval(() => {
    var randomValue = Math.floor((Math.random()*10)+1);
    inputValueSetter(randomValue);
}, 10000);



///After learning from the class.
sample = {}

Object.defineProperty(sample,"inputVal",{
    get: function(){
        return value;
    },
    set: function(inp){
        value = inp;
        document.getElementById("change").value = inp;
        document.getElementById("disps").innerHTML = inp;
    }
});

setInterval(() => {
    sample.inputVal = Math.floor(Math.random()*11);
}, 10000);

function update(event){
    sample.inputVal = event.target.value;
}