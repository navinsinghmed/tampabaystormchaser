const hurricane1 = {
    max_wind: '165 mph',
    hurricaneName: 'Hurricane Ian',
    origin: 'Caribbean Sea',
    isHurricane: true,
    category: 5,
    cost: 1500,
    rank: 1
};

console.log(hurricane1);

const {category, cost, rank, ...others} = hurricane1;
console.log("category: " + hurricane1.category);
console.log("object other properties: ");
console.log(others);
console.log(hurricane1.others);

const { water_temp = 96 } = hurricane1;
console.log(water_temp);


const apple = {
    quantity: 3,
    price: 2.99
}

console.log(apple);

function checkOut(apple){
    const {quantity = 1, price} = apple;
    return quantity * price; 
}

console.log(checkOut(apple));

const hurricane_List = [
  {name: "Hurricane Ian", max_wind: 165},
  {name: "Hurricane Irma", max_wind: 142},
  {name: "Hurricane Eta", max_wind: 140}  
];

console.log(hurricane_List);

const [ topHurricane ] = hurricane_List;
console.log(topHurricane);
const [ topHurricane1, secondHurricane, ...remainders] = hurricane_List;
console.log(topHurricane1);
console.log(secondHurricane);
const r1 = remainders;
console.log(r1[0]);

const flower = {
    quantity: 10,
    price: 5    
}

function getTotalCost({quantity, price}){
    return quantity * price;
}
console.log("cost of flower function with destructure: ")
console.log(getTotalCost(flower));

function funnyNumber({x = 2, price}){
    return x * price;
}

console.log("funny function destructured: ")
console.log(funnyNumber(flower));

const longStorm = ["Hurricane Frances", "Hurricane Ian", "Hurricane Irma"];
const stormSurge = ["Hurricane Eta", "Hurricane Nicole", "Hurricane Elsa"];

function mostSevere([violent, severe, strong]){
    return { violent, severe, strong};
}

console.log(mostSevere(longStorm));
console.log(mostSevere(stormSurge));

const worst_hurricane = {
    Name: "Hurricane Ian",
    Year: 2022,
    Reasoning: {
        wind: "165 mph",
        rationale: "Category 5 Wind and Storm Surge"
    },
    Rank: 1,
    Similar_Cyclones: [
        {Title: "Hurricane Irma", Max_Wind:"142 mph"},
        {Title: "Hurricane Eta", Max_Wind: "140 mph"}
    ],
    Consecutive_Year: 3
}
console.log(worst_hurricane);
const {Reasoning: {wind, rationale: why}} = worst_hurricane;
console.log(why);
const {Similar_Cyclones: [, Second_Storm]} = worst_hurricane;
console.log("second major storm: ");
console.log(Second_Storm);
const {Similar_Cyclones: [first_storm]} = worst_hurricane;
console.log("first major storm: ");
console.log(first_storm);
const {Similar_Cyclones: [{Max_Wind}]} = worst_hurricane;
console.log("Max wind of the first major storm: Irma: ");
console.log(Max_Wind);
const {Similar_Cyclones: [{Max_Wind: maxWind1}, {Max_Wind: maxwind2}]} = worst_hurricane;
console.log("maximum winds for both major storms")
console.log("Hurricane Irma: ");
console.log(maxWind1);
console.log("Hurricane Eta: ");
console.log(maxwind2);

let happy = "Yeehaw!";
let sad = "No Way!";
let moods = [happy,sad];
console.log(moods);
[sad, happy] = moods;
console.log("new sad: ")
console.log(sad);
console.log("new happy: ")
console.log(happy);

let low_windVelocity = 138;
let high_windVelocity = 165;
const windyBaby = [low_windVelocity, high_windVelocity];
console.log("low to high: ")
console.log(windyBaby);
[low_windVelocity, high_windVelocity] = [high_windVelocity, low_windVelocity];
console.log("high to low");
console.log([low_windVelocity,high_windVelocity]);