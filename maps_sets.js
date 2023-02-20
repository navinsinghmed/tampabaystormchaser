
//question 1 
const numbers123 = new Set([1,1,2,2,3,4]);
console.log(numbers123);
//returns 1,2,3,4 deletes duplicate instances
//question 2
const array123 = [1,1,2,2,3,4];
const array2 = [...new Set(array123)];
console.log(array2);

console.log("shortening and removing duplicates: ");
const shorten1 = [...new Set("referee")].join("");
//prints 'ref' the result with duplicates removed
console.log(shorten1);

//question 3
let m = new Map();
m.set([1,2,3], true);
//print array [1,2,3] with true 
console.log(m);
//print array [1,2,3] with false
m.set([1,2,3], false);
console.log(m);

//hasduplicate
console.log("has duplicate?");
const hasDuplicate = arr => new Set(arr).size !== arr.length;
console.log("1,3,2,1 has duplicate: return true")
console.log(hasDuplicate([1,3,2,1])); //true
console.log("1,5,-1,4 does not have duplicate- return false")
console.log(hasDuplicate([1,5,-1,4])); //false

//vowelCount function
console.log("vowel count function test: ");

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase();
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}

console.log("vowel count for 'awesome' ");
console.log(vowelCount("awesome"));
console.log("vowel count for 'Colt'");
console.log(vowelCount('Colt')); 


const myMap = new Map();
console.log(myMap);
myMap.set(7, "seven");
console.log(myMap);
myMap.set('7', 'seven string');
console.log(myMap);
console.log(myMap.get(7));
console.log(myMap.get('7'));
console.log([]===[]);
const empty = [];
myMap.set(empty, 'empty array!');
console.log(myMap);
console.log(myMap.get(empty));
myMap.set(true, "TRUE!");
console.log(myMap.get(true));

const add = (x,y) => x + y;
const mult = (a,b) => a*b;

const funcCalls = new Map();
funcCalls.set(add,0);
funcCalls.set(mult,0);

funcCalls.set(add, 1);
funcCalls.set(mult, 9);
console.log(funcCalls);
console.log(funcCalls.get(add));
console.log(funcCalls.get(mult));

const hurricaneData = [
  [165, "Hurricane Ian"],
  [140, "Hurricane Jeanne"],
  [138, "Hurricane Elsa"],
  [141, "Hurricane Eta"]  
];

const hurricaneMap = new Map(hurricaneData);
console.log(hurricaneMap);
hurricaneMap.set(154, "Hurricane Nicole").set(142, "Hurricane Hermine");
console.log(hurricaneMap);

console.log(hurricaneMap.has(140));
hurricaneMap.delete(142);
console.log(hurricaneMap);
console.log(hurricaneMap.keys());

const hurricaneTotals = [
  [1, "Hurricane Hermine"],
  [2, "Hurricane Irma"],
  [3, "Hurricane Ian"]  
];

const totalMap = new Map(hurricaneTotals);
console.log(totalMap);
console.log("using forEach to print all elements: ");
totalMap.forEach((val, key) => {
   console.log(key + "=>" + val); 
});

console.log("for loop printing totals: ")
for(let x of hurricaneTotals){
    console.log(x);
};

console.log('destructuring to print all elements of hurricane totals: ');
for(let [key,value] of hurricaneTotals){ 
    console.log(key + " => " + value);   
};

console.log("sets: ");

const storms = new Set();
console.log(storms);
storms.add(165);
console.log(storms);
console.log(storms.has(165));

function filterHashTags(tags){
    const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);    
    return tags.filter((tag) => !bannedHashTags.has(tag));
};

const funnyTags = ['happymonday', 'yolo', 'winning', 'sunset'];
const resultantTags = filterHashTags(funnyTags);
console.log(resultantTags);

const winds = [138, 140, 142, 154, 165];
console.log(winds);
const wind_set = new Set([100, 115, 127, 135, 140, 142, 154, 165]);
console.log(wind_set);
const wind_array = [...new Set(winds)];
console.log(wind_array);

