const color = 'teal';
const obj = {};
obj.color = '#3723FF';
obj[color] = '#3723FF';
console.log(obj);
console.log(color);
console.log(obj.color);
obj[1 + 4 - 2 * 8] = '#3723FF';
console.log(obj);

console.log("object keys " + Object.keys(obj));
console.log("object values " + Object.values(obj));
console.log("object entries " + Object.entries(obj));

console.log("using for loop to console.log keys and values: ");

for(let [k,v] of Object.entries(obj)) {
    console.log(k, v);
}

console.log(obj['-11']);

console.log(Math.max(1,2,3,4));
const add = (x,y) => x + y;
const mult = (x,y) => x * y;
const square = (x) => x * x;
const cube = (x) => x * x * x;
const power = (x,y) => x ** y;

const myMath = {};
myMath.add = add;
myMath.mult = mult;

console.log("3 + 4 = " + myMath.add(3,4));
console.log("8 x 3 = " + myMath.mult(8,3));

const myMath2 = {add, mult, square, power};
console.log('3 to the power 3: ');
console.log(myMath2.power(3,3));

const myMath3 = {
    add: function(x,y) {
        return x + y;
    },
    mult: (x, y) => {
        return x * y;
    }
}

console.log("add and multiply: ");
console.log("3 + 4 = ");
console.log(myMath3.add(3,4));
console.log("3 x 5 = ");
console.log(myMath3.mult(3,5));

const myMath4 = {
    add(x,y) {
        return x+y;
    },
    mult(x,y) {
        return x*y;
    },
    square(x) {
        return x*x;
    }
}

console.log("4 + 2 = ");
console.log(myMath4.add(4,2));
console.log("7 x 8 = ");
console.log(myMath4.mult(7,8));
console.log("5 squared = ");
console.log(myMath4.square(5));

function getHypotenuse(a,b) {
    return Math.sqrt(a ** 2 + b ** 2);
}
function getArea(a,b) {
    return a*b/2;
}

console.log("3,4 rectangle find hyp: ");
console.log(getHypotenuse(3,4));

const rightTriangle = {
    a: 9,
    b: 12,
    getArea: function(){
        return this.a * this.b/2;
    },
    getHypotenuse : function() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
    printThis: function() {
        console.log(this);
    }
};

console.log(rightTriangle);
console.log('area of right triangle: ');
console.log(rightTriangle.getArea());
console.log('hypotenuse length: ');
console.log(rightTriangle.getHypotenuse());
rightTriangle.printThis();

const rightTriangle2 = {
    a: 3,
    b: 4,
    printThis() {
        console.log(this);
    },
    getArea() {
        return this.a * this.b/2;
    },
    getHypotenuse() {
        this.printThis();
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}

console.log(rightTriangle2);
console.log("area of triangle: ");
console.log(rightTriangle2.getArea());
console.log("hypotenuse: ");
console.log(rightTriangle2.getHypotenuse());
console.log('print this');
rightTriangle2.printThis();
rightTriangle2.a = 10;
rightTriangle2.b = 12;
console.log(rightTriangle2.getArea());

function BigTriangle(a,b) {
    this.a = a;
    this.b = b;
    this.getArea = function() {
        return this.a * this.b/2;
    };
    this.getHypotenuse = function() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);  
    };
}

const tri1 = new BigTriangle(3,4);
console.log('area of big triangle: ' + tri1.getArea());
console.log('hypotenuse of big triangle: ');
console.log(tri1.getHypotenuse());

const hurricaneSet = new Set([154, 165, 142]);
console.log(hurricaneSet);
console.log(hurricaneSet.prototype);
console.log([]);
console.log([]._proto_ === Array.prototype);

Array.prototype.pushit = function(val) {
    console.log(`So you want to add ${val}?`);
    console.log("Sorry don't feel like it.");   
}

const nums = [1,2,3];
console.log(nums.pushit(9));
console.log(nums);
console.log("nums push 8: " + nums.push(8));
console.log("nums array: " + nums);

function Triangle1(a,b) {
    this.a = a;
    this.b = b;
}

Triangle1.prototype.getArea = function () {
    return this.a * this.b/2;
};

Triangle1.prototype.getHypotenuse = function () {
    return Math.sqrt(this.a**2 + this.b**2);  
};

const tri3 = new Triangle1(3,4);
console.log(tri3);
console.log("get area: ");
console.log(tri3.getArea());
console.log("get hypotenuse: ");
console.log(tri3.getHypotenuse());

const tri4 = new Triangle1(9,12);
console.log("triangle 4: ");
console.log(tri4);
console.log("does tri3.getArea === tri4.getArea? ");
console.log(tri3.getArea === tri4.getArea);

class Triangle_Class{
    greet(){
        console.log("Hello from Triangle Class!");
    }
    display(){
        console.log(`Triangle with the sides of ${this.a} and ${this.b}`);
    }
}

const tri5 = new Triangle_Class();
const tri6 = new Triangle_Class();
console.log("tri5 with class: ");
console.log(tri5);
console.log(tri5.greet()); //undefined, console in function
tri5.greet();
tri5.display();
tri5.a = 3;
tri5.b = 4;
tri6.a = 9;
tri6.b = 12;
console.log("tri5: ");
tri5.display();
console.log('tri6: ');
tri6.display();

class Constructor_Triangle {
    constructor(a, b, c){
        console.log("You made a new triangle.");
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side <= 0) {
                console.log("invalid side, I am the walrus!");
            }
            else {
                console.log('valid side, I am the walrus!');
            }
        }
        if(!Number.isFinite(a) || a <= 0){
            console.log("Sides must be positive finite values.");
        }
        else {
            console.log(`Side ${a} is valid!`);
        }
        if(!Number.isFinite(b) || b <= 0){
            console.log("Sides must be positive finite values.");
        }
        else {
            console.log(`Side ${b} is valid!`);
        }
        if(!Number.isFinite(c) || c <= 0){
            console.log("Sides must be positive finite values.");
        }
        else {
            console.log(`Side ${c} is valid!`);
        }
        this.a = a;
        this.b = b;
        this.c = c;
        console.log(a, b, c);
    }
    greet() {
        console.log("Hello from constructor triangle.");
    }
    display() {
        console.log(`Triangle with sides of ${this.a} and ${this.b} and ${this.c}`);
    }
    getArea(){
        const {a,b,c} = this;
        const s = (a+b+c)/2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
    }
    isBig(){
        return this.getArea() > 50;
    }
}

console.log("using constructor triangle: ");
console.log(Constructor_Triangle);
const bigDaddyTriangle = new Constructor_Triangle(5,6,7);
console.log("print big daddy triangle: ");
console.log(bigDaddyTriangle);

const bigDaddyTriangle2 = new Constructor_Triangle(3,4,5);
console.log("big daddy triangle 2: ");
console.log(bigDaddyTriangle2);

console.log('display big daddy triangle 2: 3 sides: ');
bigDaddyTriangle2.display();
console.log("print big daddy triangle 2 again: ");
console.log(bigDaddyTriangle2);

const bigDaddyTriangle3 = new Constructor_Triangle(9,12,15);
console.log(bigDaddyTriangle3);
console.log("area of big daddy triangle 3: ");
console.log(bigDaddyTriangle3.getArea());
console.log("is it big? area > 50? ");
console.log(bigDaddyTriangle3.isBig());

console.log("start inheritance and super code: ");

class Majestic_Right_Triangle {
    constructor(a,b,c) {
        for(let side of [a,b,c]){
            if(!Number.isFinite(side) || side <= 0){
                console.log("sides must be positive numbers");
            }
            else{
                console.log(`${side} is a valid side length`);
            }
        }
        if(a*a + b*b !== c*c){
            console.log("Not a right triangle!");
        }
        else{
            console.log("Woop Woop! This is a right triangle!");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    display() {
        console.log(`Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`);
    }
    greet() {
        console.log("hello from the triangle of majesty!");
    }
    getArea(){
        const {a,b,c} = this;
        const s = (a+b+c)/2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c)); 
    }
    isBig(){
        return this.getArea() > 50;
    }   
}

const maj1 = new Majestic_Right_Triangle(3,4,5);
console.log(maj1);
console.log("area of this majestic right triangle: ");
console.log(maj1.getArea());
const area_maj1 = maj1.getArea();
const bool_area_maj1 = maj1.isBig();
console.log("area, is it big?");
console.log(area_maj1, bool_area_maj1);

class SuperTriangle extends Majestic_Right_Triangle {
    constructor(a,b,c){
        console.log("inside super right triangle constructor: ");
        super(a,b,c);
    }
    display(){
        console.log(`Super Majestic Right Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`);
    }
    display2(){
        return super.display();
    }
}

const super1_Triangle = new SuperTriangle(3,4,5);
console.log(super1_Triangle);
super1_Triangle.display();
console.log(super1_Triangle.display());
console.log("get area of super1_Triangle! ");
console.log(super1_Triangle.getArea());
console.log("is the area of super1 triangle big??? ");
console.log(super1_Triangle.isBig());
console.log('test super display: ');
console.log(super1_Triangle.display2());