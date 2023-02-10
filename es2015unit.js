var PI = 3.14;
PI = 42;
console.log(PI);

const piConst = 3.14;
console.log(piConst);

//var- reassign, redeclare, hoist; let- reassign only, block scope
//const- cannot reassign or redeclare


//const- block scope, cannot hoist; var-hoistable, reassign, redeclare allowed

//let- reassign, const- cannot reasign or redeclare


//var- the variable is put on the top of the scope it
//was declared in- so comes out as undefined until assigned

//functions are hoisted too

var stormChaser = "Navin Singh";
console.log(stormChaser);
var stormChaser = "Tampa Bay Storm Chaser";
console.log(stormChaser);
var stormName = "Hurricane 2023";

function sendWarning(a) {
    console.log("warning function: " + stormChaser);
    console.log(a + " Hurricane Warning");
}

sendWarning(stormName);

let x = 10
console.log(x);
x = "i love pet Chickens";
console.log(x);

const myCats = [];
myCats.push('meow');
console.log(myCats);

console.log("hoisting " + hurricanes);
var hurricanes = ['Ian', 'Nicole', 'Eta', 'Irma'];
console.log(hurricanes);

