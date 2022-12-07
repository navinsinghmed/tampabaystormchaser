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
