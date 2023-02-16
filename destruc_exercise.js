let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log("print '8'");
console.log(numPlanets);
console.log("print '1846'");
console.log(yearNeptuneDiscovered);

let planetFacts = {
    numPlanets_1: 8,
    yearNeptuneDiscovered_1: 1846,
    yearMarsDiscovered_1: 1659
};

let {numPlanets_1, ...discoveryYears} = planetFacts;
console.log("this will print '{yearNeptuneDiscovered_1: 1846, yearMarsDiscovered_1: 1659");
console.log(discoveryYears);

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
}                               
console.log("prints 'Your name is Alejandro and you like purple'");
const name1 = getUserData({firstName:"Alejandro", favoriteColor:"purple"});
console.log(name1);

console.log("prints Your name is Melissa and you like green'");
const name2 = getUserData({firstName:"Melissa"});
console.log(name2);

console.log("prints 'your name is undefined and you like green'");
const name3 = getUserData({});
console.log(name3);

console.log("prints 3 separate rows of names: Maya, Marisa, Chi");
let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first);
console.log(second);
console.log(third);

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  console.log("prints raindrops on roses");
  console.log(raindrops);
  console.log('prints whiskers on kittens');
  console.log(whiskers);
  console.log('prints rest of items after whiskers on kittens');
  console.log(aFewOfMyFavoriteThings);
  // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
  
  let [raindrops2, whiskers2, ...aFewOfMyFavoriteThings2] = [
      "Raindrops on roses again!",
      "Whiskers on kittens again!",
      "Bright copper kettles Evermore!",
      "Warm woolen mittens for life for meesa Jar Jar Binks!",
      "Brown paper packages tied up with strings for yousa!"
  ]
  console.log(raindrops2);
  console.log(whiskers2);
  console.log(aFewOfMyFavoriteThings2);
  
  
  let numbers = [10,20,30];
  [numbers[1],numbers[2]] = [numbers[2], numbers[1]];
  console.log("prints 10, 30 , 20 as order of numbers");
  console.log(numbers);
  
  var obj = {
      numbers: {
          a: 1,
          b: 2
      }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;
  console.log(a,b);
  
  //ES2015:
  const obj1 = {
      numbers1: {
          a1: 1,
          b1: 2
      }
  };
  const{a1,b1} = obj1.numbers1;
  console.log({a1,b1});
  console.log(a1,b1);
  
  //es5 array swap
  var arr = [1,2];
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  console.log(arr);
  
  //es2015 array swap with destructure
  let arr2 = [1,2];
  console.log("arr2 is : " + arr2);
  [arr2[0], arr2[1]] = [arr2[1], arr2[0]];
  console.log("arr2 swapped is " + arr2);

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
const newRaceData = raceResults(['Tom', 'Margaret', 'Allison', "David", "Pierre"]);
console.log(newRaceData);
console.log(newRaceData.rest);
  