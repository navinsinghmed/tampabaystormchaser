//old method
function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

console.log(createInstructor("Navin", "Singh"));

//ES2015 version
function createInstructor2015(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

const newInstructor = createInstructor2015("I AM ", " THE WALRUS");
console.log(newInstructor);

//old method
var favNum = 42;
var instructor1 = {
    firstName: "Walrus"
}

instructor1[favNum] = "that is my favorite!";
console.log(instructor1);

//ES2015 version
let favoriteNumber = 100;

const instructor = {
    firstName: "Navin",
    [favoriteNumber]: "That is my favorite wahoo!"
}

console.log(instructor);

//old method
var instructorMethodOld = {
    firstName: "Navin",
    sayHi: function(){
        return "Hi! Yee Haw!";
    },
    sayBye: function(){
        return this.firstName + " says bye!";
    }
}

console.log(instructorMethodOld);
console.log(instructorMethodOld.sayHi());
console.log(instructorMethodOld.sayBye());

//es2015 method
const instructorMethodNew = {
    firstName: "Walrus",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye!";
    }
} 
console.log(instructorMethodNew);
console.log(instructorMethodNew.sayHi());
console.log(instructorMethodNew.sayBye());


//createAnimal

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}

const ocean_mammal = createAnimal("walrus", "bark", "arrggg!")
ocean_mammal.bark();

console.log(ocean_mammal);
console.log(ocean_mammal.bark());
