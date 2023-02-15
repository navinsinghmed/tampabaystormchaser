function makePerson (first, last, age) {
    return {
    first, last, age,
    isAlive: true
    }
}

const person1 = makePerson("Navin", "Singh", 35, true);
console.log(person1);

const mathStuff = {
    x : 200,
    add: function(a, b) {
        return a + b;
    },
    square: function(a) {
        return a * a;
    }    
};

console.log(mathStuff.add(3,4));
console.log(mathStuff.square(4));

const mathStuffShort = {
    x : 200,
    add(a, b) {
        return a + b;
    },
    square(a) {
        return a * a;
    }
}

console.log(mathStuffShort.add(5,10));
console.log(mathStuffShort.square(7));
