console.log("working!");

let happy = 3;

if (happy === 3) {
    console.log("Happy!");
}

let num = 5;

if (num % 2 != 0) {
    console.log("odd number");
}

let hurricaneWind = 105;
if (hurricaneWind < 74) {
    console.log("not a hurricane");
}
else if (hurricaneWind > 110) {
    console.log("major hurricane");
}
else {
    console.log("Medium Hurricane");
}

let password = "Hurricane 2022";
if (password.length >= 5) {
    if(password.indexOf(' ') !== -1) {
        console.log("password cannot include spaces")
    }
    else {
        console.log("valid password");
    }
}
else {
    console.log("password is too short!")
}

let maxWind2022 = 165;
let maxWind2017 = 142;

let stormName1 = 3;

//switch example
switch (stormName1) {
    case 1:
        console.log ("Tropical Depression");
        break;
    case 2:
        console.log ("Tropical Storm");
        break;
    case 3:
        console.log("Hurricane");
        break;
    default:
        console.log("Invalid Name");
}

let ianWind = 165;
let irmaWind = 142;

//ternary operation
ianWind > irmaWind ? console.log("2022 Highest Wind") : console.log('2017 Highest Wind');

//Is it hurricane season- if so- red alert
let status1 = "hurricane season";

let colorStatus = status1 === "hurricane season" ? 'red' : 'green';
console.log(colorStatus);

let zone1 = Math.random();
console.log("Random zone value is " + zone1) ;
if (zone1 > .5) {
    console.log("Random zone value over 0.5");
}
else {
    console.log("Random zone value less than or equal to 0.5");
}

//calculate average of values in an array using functions

let velocityArray = [142, 140, 138, 165, 154];

let averageVelocity = averageCalculator(velocityArray);

function averageCalculator(velA) {
    let sumTotal = 0;
    
    for(i=0; i<velA.length; i++) {
        sumTotal += velA[i];
    }
    return sumTotal/velA.length;
}

console.log("Average velocity is " + averageVelocity);

//determine max velocity of values in array using functions

let maxVelocityAllStorms = maxVelocityCalculator(velocityArray);

function maxVelocityCalculator(startArray) {
    let maxV = startArray[0];
    for(a=0; a < startArray.length; a++) {
        if(startArray[a] > maxV) {
            maxV = startArray[a];
        }
        
    }
    return maxV;
}

console.log("The maximum velocity of all hurricanes entered is " + maxVelocityAllStorms);

let colorArray = ["red", "blue", "green"];
console.log(colorArray);
colorArray[colorArray.length] = "purple";
console.log(colorArray);
colorArray.push("orange");
console.log(colorArray);
colorArray.pop();
console.log(colorArray);
colorArray.push("orange");
console.log(colorArray);
colorArray.unshift("yellow");
console.log(colorArray);
colorArray.unshift("no color");
console.log(colorArray);
colorArray.shift();
console.log(colorArray);

let group2020 = ["Bertha", "Sally", "Eta"];
let group2021 = ["Elsa", "Fred", "Ida"];
let group2022 = ["Alex", "Ian", "Nicole"];

let allStorms2020_2022 = group2020.concat(group2021, group2022);
console.log("All Impacting Hurricane and Tropical Cyclone Names 2020-2022: " + allStorms2020_2022);

console.log(allStorms2020_2022.includes("Elsa"));
console.log(allStorms2020_2022.includes("Ian",3));
console.log(allStorms2020_2022.indexOf("Ian"));

let hurricaneListString = allStorms2020_2022.join("--");
console.log(hurricaneListString);

let reverse_hurricaneString = allStorms2020_2022.reverse().join(" -- ");
console.log(reverse_hurricaneString);

console.log(allStorms2020_2022);

let someCyclones = allStorms2020_2022.slice(0,6);
console.log(someCyclones);

console.log(allStorms2020_2022);
allStorms2020_2022.reverse();

console.log(allStorms2020_2022);
let earliestCyclones = allStorms2020_2022.slice(2,5);
console.log(earliestCyclones);

let last2Cyclones = allStorms2020_2022.slice(-2);
console.log(last2Cyclones);

console.log(allStorms2020_2022);
allStorms2020_2022.splice(2,0,"Sally Second Loop");
console.log(allStorms2020_2022);

const foods = ["chocolate"];
foods.push("milk");
console.log(foods);

const velocityByYear = [[140, 130], [125, 142], [125, 139, 130], [134], [125, 131, 140], [138, 140], [165, 154]];
console.log(velocityByYear);

const velocity_2016_2017_max = [velocityByYear[0][0], velocityByYear[1][1]];
console.log(velocity_2016_2017_max + " Are the max velocities during 2016 and 2o17");

const hurricane_Data_Object_2022 = {
    numberOfStorms2022 : 3,
    maxWind_2022: 165,
    minWind_2022: 116,
    lastCycloneWind2022: 154,
    stormNames2022: ["Alex", "Ian", "Nicole"],
    165 : 'Second Storm'
};

console.log("The max wind in 2022 was " + hurricane_Data_Object_2022.maxWind_2022);
console.log("max wind with what storm: " + hurricane_Data_Object_2022[165]);
console.log("number of cyclones in 2022 was " + hurricane_Data_Object_2022.numberOfStorms2022);

//Season intensity and experience ratings 0 to 5
const ratings = {};

ratings['2022'] = 5;
console.log(ratings);

ratings["2021"] = 3;
console.log(ratings);

ratings["2021"] += 1;
console.log(ratings);

let programming = {
    languages: ["Javascript", "Python", "Ruby"],
    isChallenging: true,
    isRewearding: true,
    difficulty: 8,
    jokes: "https//bit.ly/2ysFran"
};

console.log(programming.languages);
programming.languages.push("Go");
console.log(programming.languages);
programming.difficulty = 7;
console.log(programming.difficulty);
delete programming.jokes;
console.log(programming);
programming["isFun"] = true;
console.log(programming);

for (let num = 1; num <= 7; num++) {
    console.log(`${num}x${num} = ${num * num}`);
}

for (let i = 200; i >= 0; i -= 25) {
    console.log(i);
}

const windRecord = [142, 140, 138, 165, 154];

for(let i = 0; i < windRecord.length; i++)
{
    console.log(i, windRecord[i]);
}

const windSpeed_Hurricane = [
    {
        Name: 'Irma',
        Vmax: 142
    },
    {
        Name: 'Eta',
        Vmax: 140
    },
    {
        Name: 'Ian',
        Vmax: 165
    }
];

for(let i = 0; i < windSpeed_Hurricane.length; i++) {
    let cycloneSelected = windSpeed_Hurricane[i];
    console.log(`Hurricane ${cycloneSelected.Name} produced winds of ${cycloneSelected.Vmax} mph`);
}


const word1 = "hurricane";
let reversedWord = "";
for (let i = word1.length-1; i >= 0; i--) {
    reversedWord += word1[i];
    console.log(reversedWord);
}

let total2 = 0;
for (let i = 0; i < windSpeed_Hurricane.length; i++) {
    total2 += windSpeed_Hurricane[i].Vmax;
}
let mean2 = total2/windSpeed_Hurricane.length;
console.log("mean wind is " + mean2);

//new projects


