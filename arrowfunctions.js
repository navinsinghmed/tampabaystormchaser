function double2(arr) {
    return arr.map(function(val) {
       return val * 2; 
    });
}

const array_exercise = [1,2,3,4,5];

const double_arrow_exercise = arr => arr.map(val => val * 2);

console.log(double2(array_exercise));
console.log(double_arrow_exercise(array_exercise));

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
       return num ** 2; 
    });
    var evens = squares.filter(function(square){
       return square % 2 === 0; 
    });
    return evens;
}


console.log(squareAndFindEvens(array_exercise));

const squareAndFindEvensArrow = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);
console.log(squareAndFindEvensArrow(array_exercise));

function greet(){
    console.log("I am the walrus");
}

greet();

const add = function(x, y){
    return x + y;
}

console.log("4 + 5 is " + add(4,5));

const add2 = (x,y) => {
    return x + y;
}

console.log("3 + 4 is " + add2(3,4));


const maximumWind = [140, 142, 138, 165, 154].reduce(function(max, currNum){
   return Math.max(max, currNum); 
});

console.log("Max wind: " + maximumWind + " mph");

const maximum_Arrow_Wind = [140, 142, 138, 165, 154].reduce((max2, currNum2)=>{
    return Math.max(max2,currNum2);
});

console.log("Max Wind Via Arrow Function: " + maximum_Arrow_Wind + " mph");

const numberLow = [1,2,3,4,5];
numberLow.forEach((n)=>{
   console.log(n*10); 
});

const greet2 = () => {
  console.log("I am the walrus!");  
};

greet2();

let nums = [1,2,3];
let arrSquared = nums.map(n => n ** 2);

console.log(arrSquared);

let first_six = [1,2,3,4,5,6];
const first_six_even_array = first_six.filter(function(num){
   return num % 2 === 0; 
});

console.log("evens: " + first_six_even_array);

const evens2 = first_six.filter((num)=>num%2===0);
console.log("evens with arrow: " + evens2);

const doubler = (n) => n * 2;
console.log(" 8 doubled is " + doubler(8));

const list_array = [1,5,7,9,10,12,13,15].map((n) => {
  if(n % 2 === 0) {
      return 'even';
  }
  return 'odd';  
});

console.log(list_array);

const list_array_2 = [1,5,7,9,10,12,14,15,17];
const list_array_2_odd_even = list_array_2.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
console.log(list_array_2_odd_even);

const dailyRainTotals = [[1.2, 0.35, 2.2], [1.7, 0.6, 0.1], [2.5, 0.9, 1.5]];
console.log(dailyRainTotals);
console.log(dailyRainTotals[1]);

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }   
}

printArray(dailyRainTotals);

const mapped_rain = dailyRainTotals.map((hourlyRainTotals) => {
    return hourlyRainTotals.reduce((sum, inchesOfRain) => {
        return sum + inchesOfRain;     
    });   
});

console.log(mapped_rain);

const sum_rain = dailyRainTotals.map((hourlyRainTotals) => (
  hourlyRainTotals.reduce((sum, inchesOfRain) => (
    sum + inchesOfRain))));

console.log(sum_rain);

const makeMath = (num) => {
    return {
        square: num*num,
        double: num*2
    };   
};

console.log(makeMath(3));

const makeMath2 = (num2) => ({
   square: num2 * num2,
   double: num2 * 2 
});

console.log(makeMath(5));

const cat = {
    name: 'Bubs',
    meow: function() {
        return `${this.name} says MEOW!!!`; 
    }
};

console.log(cat);
console.log(cat.meow());
