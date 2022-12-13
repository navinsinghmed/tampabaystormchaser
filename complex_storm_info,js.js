const dataTable = [
  [13, 25, 10, 12],
  [5, 3, 13, 17],
  [7, 8, 14, 19],
  [24, 36, 3, 2]  
];

let totalOfData = 0;
for(let i = 0; i < dataTable.length; i++) {
    let rowValue = dataTable[i];
    for(j = 0; j < rowValue.length; j++)
        {
            totalOfData += rowValue[j];
        }
}
console.log("total is " + totalOfData);

const target = Math.floor(Math.random() * 10);
console.log(target);

let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log(guess);
    guess = Math.floor(Math.random()*10);
}
console.log(`Target: ${target} Guess: ${guess}`);


const target1 = Math.floor(Math.random()*10);
let guess1 = Math.floor(Math.random()*10);

while(true) {
    if (guess1 === target1) break;
    console.log(`Target: ${target1} Guess: ${guess1}`);
    guess1 = Math.floor(Math.random()*10);
}

console.log(`Match! Target: ${target1} Guess: ${guess1}`);

let cycloneCategory = ["Tropical Storm", "Category 4", "Category 5"];

for (let subCategory of cycloneCategory) {
    console.log(subCategory);
}

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

console.log(magicSquare);

for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sumRow = 0;
    for (let j = 0; j < row.length; j++) {
        sumRow += row[j];    
    }
    console.log(`${row} summed to ${sumRow}`);
}


for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);    
}

const words3 = ['Tropical', 'Category 1', 'Category 2'];
const words4 = ['Storm', 'Hurricane', 'Hurricane'];

for (let i = 0; i < words3.length; i++)
{
    console.log(words3[i], words4[i]);
    console.log(`${words3[i]} ${words4[i]}`);
}

const hurricane_Max_Velocity_Object = {
    Irma : 142,
    Eta : 140,
    Elsa : 138,
    Ian : 165,
    Nicole : 154    
};

console.log(hurricane_Max_Velocity_Object);

for (let cycloneName1 of Object.keys(hurricane_Max_Velocity_Object)) {
    console.log(cycloneName1, hurricane_Max_Velocity_Object[cycloneName1] + " mph");
}

//find average max velocity for hurricanes here
const maxVelocityOnly = Object.values(hurricane_Max_Velocity_Object);
console.log(maxVelocityOnly);
let velocitySumValues = 0;
for (let v1 of maxVelocityOnly) {
    console.log(v1);
    velocitySumValues += v1; 
}
let averageObjectWind = velocitySumValues/maxVelocityOnly.length;
console.log(`Average Hurricane Velocity in Object Matrix ${averageObjectWind}`);

console.log("For Loop 0 to 10:");
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("while loop 0 to 20");
let i2 = 0;
while (i2 < 21) {
    console.log(i2);
    i2++;
}

console.log("While loop of odd numbers 0 to 20: ");
let i3 = 1;
while (i3 < 20) {
    console.log(i3);
    i3 += 2;
}

console.log("for loop 10 down to 0: ");
for (let i4 = 10; i4 >= 0; i4--) {
    console.log(i4);
}

//functions

function warningStorm() {
    console.log("Hurricane Warning!");
};

warningStorm();

for (let i = 0; i < 5; i++) {
    warningStorm();
}

function randomDie() {
    let rollNumber = Math.floor((Math.random() * 6) + 1);
    console.log(`Rolled: ${rollNumber}`);
};

randomDie();

//new functions

function greet(nameYou) {
    console.log(`Hi, ${nameYou}!`);
}

let nameNew = "Hurricane Man";
greet(nameNew); 

function throwDice(numRolls) {
    for(let i = 0; i < numRolls; i++) {
        randomDie();
    }
}

throwDice(5);

function sumFury(parameter1, parameter2) {
    console.log(parameter1 + parameter2);
}

sumFury(3,4);

function sumReturn(p1, p2) {
    return p1 + p2;
}

const sumBig = sumReturn(3,5);
console.log(sumBig);

let colorMe = "Purple";

function isPurple(color1) {
    if(color1.toLowerCase() === "purple") {
        return true;
    }
        return false;
}

let colorA = isPurple(colorMe);
console.log(`Is it purple? ${colorA}`);

let colorB = isPurple("red");
console.log(`Is it purple? ${colorB}`);

function isRed(c1) {
    return c1.toLowerCase() === "red";
}


console.log("is it red? " + isRed("red"));

function isCategoryFive(hurricaneArray) {
    for(let i = 0; i < hurricaneArray.length; i++) {
        if (hurricaneArray[i].toLowerCase() === "category five") {
            return true;
        }
    }
    return false;
}

let hurricaneArray1 = ["Category three", "Category five"];
console.log("Does the List contain a Category 5? " + isCategoryFive(hurricaneArray1));
let hurricaneArray2 = ["Category one", "Category three", "Category four"];
console.log("Does the List contain a Category 5? " + isCategoryFive(hurricaneArray2));

function containsPurpleMagenta(arr) {
    for(let color of arr) {
        if(color === "purple" || color === "magenta") {
            return true;
        }
    }
    return false;
}
console.log("Does it have purple or magenta? " + containsPurpleMagenta(["purple", "red"]));




function isValidPassword (password, username) {
    if(password.length < 8) {
        return false;
    }   
    if(password.indexOf(' ') !== -1) {
        return false;
    }
    if(password.indexOf(username) !== -1) {
        return false;
    }
    return true;
}

let u1 = "dog";
let p1 = "dog lover";

console.log(`Is Password Valid? with password ${p1} and username ${u1}? ` + isValidPassword(p1, u1));

let p2 = "hurricane100";
let u2 = "dog lover";
console.log(`Is Password Valid? with password ${p2} and username ${u2}? ` + isValidPassword(p2, u2));

function avg(arr) {
    //loop over each number, add them together, divide by length of array
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    let rez = total/arr.length;
    return rez;  
}

let arrAv = [1, 3, 5, 7, 9];
console.log(`Average of ${arrAv} is: ` + avg(arrAv));

//pangram
function isPangram(sentence) {
    let lowerCased = sentence.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let char of alphabet) {
        if(lowerCased.indexOf(char) === -1) {
            return false;
        }
    }
    return true;
}

let sentence1 = "the five boxing wizards jump quickly";
let boolsent = isPangram(sentence1);
console.log(`Pangram? ${boolsent}`);


//playing card object return


function getCard() {
    const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const idx = Math.floor(Math.random() * values.length);
    const rand1 = values[idx];
    
    const suits = ["clubs", "spades", "hearts", "diamonds"];
    const suitIdx = Math.floor(Math.random() * suits.length);
    const suit1 = suits[suitIdx];
    
    return {value: rand1, suit: suit1};
}

let objcard = getCard();
console.log(objcard);

function pickRandom(arr) {
    const idx1 = Math.floor(Math.random()*arr.length);
    return arr[idx1];
}

function getCard_Method_2() {
    const valuesM2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const suitsM2 = ["clubs", "spades", "hearts", "diamonds"];
    return {value: pickRandom(valuesM2), suit: pickRandom(suitsM2)};
}

let obj2 = getCard_Method_2();
console.log("Second random selection is: ");
console.log(obj2);


function differenceCalc(a,b) {
    return a-b;
}

console.log(differenceCalc(4,3));

function productCalc(x,y) {
    return x*y;
}

console.log(productCalc(3,5));

function printDay(z) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];   
    return days[z - 1];
}

console.log(printDay(3)) ;

function lastValArr(arr) {
    return arr[arr.length-1];   
}

let cane2 = [3, 5, 7];
console.log(lastValArr(cane2));

function numberCompare(a,b) {
    if (a === b) {
        let compared = "numbers are equal";
        return compared;
    }   
    else if (a > b) {
        let bigA = "First is greater";
        return bigA;       
    }
    else
    {
        let bigB = "Second is greater";
        return bigB;
    }
}

console.log("Comparing numbers:");
console.log(numberCompare(5,4));
console.log(numberCompare(4,4));
console.log(numberCompare(3,4));

function singleLetterCount (bigWord, singleLetter) {
    let bigWordLow = bigWord.toLowerCase();
    let singleLetterLow = singleLetter.toLowerCase();
    let count = 0;
    for(let i = 0; i < bigWordLow.length; i++) {
        if(singleLetterLow === bigWordLow[i]) {
            count++;
        }
    }
    return count;         
}

const char1 = "x";
const word1 = "Xylophone X";
let numchar1 = singleLetterCount(word1,char1); 
console.log(`The Character ${char1} appears ${numchar1} times in the phrase ${word1}`);

function multipleLetterCount(string1) {
    let stringLow = string1.toLowerCase();
    let finalObjStr = {};
    for(let i = 0; i < stringLow.length; i++) {
        if(finalObjStr[stringLow[i]] === undefined) {
            finalObjStr[stringLow[i]] = 1;
        }  
        else {
            finalObjStr[stringLow[i]]++;
        }
    }
    return finalObjStr;
}

console.log("Count of letters in \"Walrus Lover\"");
console.log(multipleLetterCount("Walrus Lover"));

function arrayManipulation(arr, command, position, val) {
    if(command === 'remove') {
        if(position === 'end') {
            return arr.pop();
        }
        else if(position === "beginning") {
            return arr.shift();
        }
    }
    else if(command === 'add') {
        if(position === 'end') {
            arr.push(val);
            return arr;
        }
        else if(position = "beginning") {
            arr.unshift(val);
            return arr;
        }
    }
}

let arrayM = [2020, 2021, 2022]; 
let arrayM1 = arrayManipulation(arrayM, "remove", "end");
console.log(`Latest year for hurricanes is ${arrayM1}`);
let arrayM2 = arrayManipulation(arrayM, "remove", "beginning");
console.log(`Earliest year for hurricanes is ${arrayM2}`);
let arrayM3CycleStart = arrayManipulation(arrayM, "add", "beginning", 2016);
console.log(`Start of cycle year for Hurricanes and recent year: ${arrayM3CycleStart}`);
let arrayM4 = arrayManipulation(arrayM, "add", "end", 2023);
console.log("Full array Modified: " + arrayM4);

function isPalindrome(str) {
    str = str.toLowerCase();
    //convert string to array
    const arrayValues = str.split('');
    
    //reverse array values
    const reverseArrayValues = arrayValues.reverse();
    
    //convert array to string
    const reverseString = reverseArrayValues.join('');
    
    if(str === reverseString) {
        return true;
    }
    else {
        return false;
    }
}

const pal1 = "Hannah";
let booleanPalindrome = isPalindrome(pal1);
console.log("Is it a palindrome? " + booleanPalindrome);

let userCh = "rock";

function RPS(userCh) {
    function determineComputer(num) {
        if(num <= .33) return "rock";
        else if(num <= .66) return "paper";
        return "scissor";
    }
    
    let answers = ["rock", "paper", "scissors"];

    if(!userCh || answers.indexOf(userCh) === -1) {
        return "Please select a valid option!";
    }
    
    userCh = userCh.toLowerCase();
    let computerChoice = determineComputer(Math.random());
    
    if(userCh === computerChoice) return "Tie!";
    
    if(userCh === "rock" && computerChoice === "paper") {
        return "you lose, computer picked " + computerChoice;
    }
    
    if(userCh === "paper" && computerChoice === "scissor") {
        return "you lose, computer picked " + computerChoice;
    }
    
    if(userCh === "scissor" && computerChoice === "rock") {
        return "you lose, computer picked " + computerChoice;
    }
    return "You win! Computer picked " + computerChoice;   
    
    
}

let gameString = RPS("rock");
console.log(gameString);



