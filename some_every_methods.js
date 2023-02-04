let numbers = [1,2,3];

let some_numbers = numbers.some(function(value, index, array) {
   return value < 3; 
});

console.log(some_numbers + " Numbers less than 3 are present");

let no_numbers = numbers.some(function(value, index, array) {
   return value > 10; 
});

console.log(no_numbers + " numbers over 10 present");

const words = [
  'hurricane',
  'cyclone',
  'wind',
  'flooding',
  'surge',
  'debris',
  'warning',
  'storm'  
];

console.log(words);

let less_than_five = words.some(function(val) {
   return val.length < 5; 
});

console.log(less_than_five + " words less than 5 letters");

let more_than_sixty = words.some(function(val) {
   return val.length >= 60; 
});

console.log(more_than_sixty + " words over 60 letters");

let contains_wind = words.some(function(word) {
   return word.indexOf("wind") !== -1; 
});

console.log("contains wind? " + contains_wind);

let bool_every1 = words.every(function(w) {
    return w.length > 3;
});

console.log("all lengths over 3 " + bool_every1);

function allStrings(arr) {
    return arr.every(function(el) {
       return typeof el === 'string'; 
    });   
}

let bool_allStrings = allStrings(words);
console.log("all strings? " + bool_allStrings);

const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
   const checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
   const all_checked = Array.from(checkboxes).every(function(checkbox) {
      return checkbox.checked; 
   });
   if(!all_checked) alert("Please check all boxes!");
   console.log(all_checked);
});


function mySome(arr, callback) {
   for(let i = 0; i < arr.length; i++) {
      if(callback(arr[i], i, arr)) return true;
   }
   return false;  
}

let a2 = [4,5,6,7];
let mySome_result = mySome(a2, function(n) {
   return n > 5;
});

console.log("my some function over 5: " + mySome_result);
let mySome_result_big = mySome(a2, function(x) {
   return x > 10;
});

console.log("my some function over 10: " + mySome_result_big);

function myEvery(arr, callback) {
 for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i], i, arr)) return false;
 }
 return true;  
}

let my_every_bool1 = myEvery(a2, function(n){
   return n > 5;
});

console.log("all numbers greater than 5? " + my_every_bool1);

let my_every_bool_3 = myEvery(a2, function(x) {
   return x > 3;
});

console.log("all numbers greater than 3? " + my_every_bool_3);

let my_every_bool_integers = myEvery(a2, function(y) {
   return Number.isInteger(y);
});

console.log("all numbers integers? " + my_every_bool_integers);

let decimal_array = [1, 2, 3, 4.5];
let my_every_decimal = myEvery(decimal_array, function(x) {
   return Number.isInteger(x);
});

console.log(`All integers in ${decimal_array}? ${my_every_decimal}`);
