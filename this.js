const cat = {
    name: "Blue",
    breed: "Scottish Fold",
    dance: function(dance) {
        console.log("this is " + this);
        console.log(`this is ${this}`);
        console.log(this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
};
console.log("I am the walrus!");
console.log(cat.name);
cat.dance("salsa");

const bluesDance = cat.dance;
console.log(bluesDance);

function whatIsThis() {
    console.log("this =", this);
}

const myObj = {
    func: whatIsThis,
    color: 'purple'
};

myObj.func();
console.log("execute what is this function by itself: ");
whatIsThis();

class Dog {
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    
    dance(danceType){
        console.log("This is: ", this);
        console.log(`Woof! I am a ${this.breed} and I like to ${danceType}`);
    }
}

const smoochMonger = new Dog('SmoochBall', "Labradoodle");
smoochMonger.dance("salsa");

const fat_Dog = {
    name: "Big Fluff",
    breed: "Golden Retriever",
    dance: function(dance) {
        console.log('This is: ', this);
        console.log(`Woof! I am a ${this.breed} and I like to ${dance}`);
    }
}

console.log(fat_Dog);
const BigFluffDance = fat_Dog.dance;
BigFluffDance.call(fat_Dog, "salsa");


const big_Dog = {
    breed: "Black Lab",
    name: "Elton",
    play : function(...toys) {
        for(let toy of toys) {
            console.log(`${this.name} plays with ${toy}`);
        }
    }
};

BigFluffDance.call(big_Dog, "hip hop dance");

function printThis() {
    console.log("THIS ====>>>>", this);
}

printThis.call(big_Dog);
printThis.call(fat_Dog);
big_Dog.play("ball", "book");
const dog_fun = big_Dog.play("ball", "squeaker");
console.log(dog_fun);

console.log('using bind: ');

const fat_cat = {
    name: "fat fluffer",
    breed: "tabby",
    dance: function(dance) {
        console.log('THIS IS: ' + this.name);
        console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
    },
    play: function(...toys){
        for(let toy of toys){
            console.log(`${this.name} plays with ${toy}`);
        }
    }
};
console.log("fat cat:  ");
console.log(fat_cat);
const fat_dance = fat_cat.dance;
const boundDance = fat_dance.bind(fat_cat);
boundDance();
boundDance("waltz");

const rocket = {
    name: 'Rocket',
    breed: 'Himalayan'
};

const rocketDance = fat_cat.dance.bind(rocket);
console.log(rocketDance);
rocketDance('tango');

const doggie = {
    name: 'Tyson',
    breed: 'Mini Aussie',
    dance: rocketDance
};
doggie.dance('waltz');

const fat_cat_disco = fat_cat.dance.bind(fat_cat, 'disco');
const playsWithSocks = fat_cat.play.bind(fat_cat, 'left sock', 'right sock');
fat_cat_disco();
playsWithSocks();
playsWithSocks('dirty sock');

console.log("sales tax function: ");

function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

let total = applySalesTax(0.0725, 100);
console.log(total);


const applyCATax = applySalesTax.bind(null, 0.0725);
const applyTXTax = applySalesTax.bind(null, 0.0625);

const total2 = applyCATax(100);
const total3 = applyTXTax(100);
console.log(total2, total3);

const gymMembership = {
    name: "Navin Gym",
    total: 250,
    collectMonthlyFee: function(fee){
        const remaining = this.total - fee;
        this.total = remaining;
        console.log(`${this.name} remaining balance: ${remaining}`);
        return this.name + ' remaining balance: ' + remaining;
    }
};

console.log(gymMembership);
gymMembership.collectMonthlyFee(50);
console.log(gymMembership);

const carCost = {
    name: "Navin",
    total: 250
}

function collectMonthlyFeeCar(fee){
    const remaining = this.total-fee;
    this.total = remaining;
    console.log(`${this.name} has remaining balance of ${remaining}`);
    return this.name + ' remaining balance ' + remaining;
}

const collectCarFee = collectMonthlyFeeCar.bind(carCost, 50);
console.log(carCost);
collectCarFee();
console.log(carCost);

const fatCarCost = {
    name: "Walrus",
    total: 1000
};

const collectWalrusFee = collectMonthlyFeeCar.bind(fatCarCost, 100);
console.log(fatCarCost);
collectWalrusFee();
console.log(fatCarCost);

const whaleCost = {
    name: "Whale Man",
    total: 2000
};

const collectWhaleFee = collectMonthlyFeeCar.bind(whaleCost, 200);
console.log(whaleCost);
collectWhaleFee();
console.log(whaleCost);

