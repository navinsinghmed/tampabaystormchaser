//type of vehicle

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    honk() {
        return "Beep.";
    }
    
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

const vehicle1 = new Vehicle("Honda", "CRV", "2020");
console.log(vehicle1);
console.log(vehicle1.honk());

//Cars are a type of vehicle with 4 wheels
class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

const car1 = new Car("Walrus Mobile", "Mammal Make", "2023");
console.log(car1);
console.log(car1.honk());

//Motorcycles are a type of vehicle with 2 wheels

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    
    revEngine(){
        return "VROOM!";
    }    
}

const moto1 = new Motorcycle("Walrus Moto", "Mammal Style", "2025");
console.log(moto1);
console.log(moto1.revEngine());

const moto2 = new Motorcycle("Walrus Moto 2", "Mammal Style", "2025");
const moto3 = new Motorcycle("Walrus Moto 3", "Mammal Style", "2025");
const moto4 = new Motorcycle("Walrus Moto 4", "Mammal Style", "2025");
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if(this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
            return "Vehicle added!";
    }
}

const garageWalrus = new Garage(3);
console.log(garageWalrus);
garageWalrus.add(moto1);
console.log(garageWalrus);
garageWalrus.add(moto2);
garageWalrus.add(moto3);
console.log(garageWalrus);
console.log(garageWalrus.add(moto4));
console.log(garageWalrus);