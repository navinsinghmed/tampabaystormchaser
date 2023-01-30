function holler() {
    console.log("Hi!");
}

holler();

const whisper = function () {
  console.log('I am the walrus');  
};

whisper();

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x-y;
}

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    return x/y;
}

function power(x,y) {
    return x ** y;
}

console.log(divide(10,5));


//store fn values in array
const mathFuncs_Array = [add, subtract, multiply, divide, power];

console.log("testing the timer");
setTimeout(whisper, 4000);


function doMath(a,b, chosen_mathFunction) {
    return chosen_mathFunction(a,b);
}

//complex function, pass fn as argument
console.log("pass function as argument");
let product_argument= doMath(7,3,multiply);
console.log("Product of function passed as argument is " + product_argument);

console.log("Here is a power function putting 2 functions in one function: ")
doMath(30,2, function(x1, x2) {
    console.log(x1 ** x2);
});

function doAllMath(alpha, beta, math_Methods_Array){
   for(let func of math_Methods_Array){
        console.log(func(alpha,beta));
           
   } 
}

//do all math function call the function
console.log("Do all math methods: ")
doAllMath(4,8,mathFuncs_Array);

const colors = ['teal', 'cyan', 'peach', 'purple'];

colors.forEach(console.log);

colors.forEach(function(val) {
   console.log(val.toUpperCase()); 
});

function yell(val,i) {
    const caps = val.toUpperCase();
    console.log(`At index ${i}, ${caps}`);   
}

colors.forEach(yell);

const prices = [30.99, 19.99, 2.50, 99.0];
let total = 0;

prices.forEach(function(price) {
   total += price;
}); 

console.log("the total is " + total);

const prices2 = [30.99, 19.99, 2.50, 99.0];
let total2 = 0;
for (let price_2 of prices2) {
    total2 += price_2;
}   

console.log("total using 'for-let' loop is " + total2);


function myForEach(arr1, callback1) {
    for(let i = 0; i < arr1.length; i++) {
        callback1(arr1[i]);
    }
}

myForEach(colors, function(color) {
   console.log(color.toUpperCase()); 
});

function myForEach2(arr2, callback) {
    for(let j = 0; j < arr2.length; j++) {
        callback(arr2[j], j, arr2);
    }   
}

myForEach2(colors, function(color, k) {
   console.log(color.toUpperCase(), "at index of " + k); 
});

const numbers_Map = [21,37,64,99,142];
const negative_numbers_Map = numbers_Map.map(function(num) {
   return num * -1; 
});

console.log("Negative Number Array via Map: " + negative_numbers_Map);

const todos = [
    {
        id: 1,
        text: 'work on programming',
        priority: 'high'
        
    },
    {
        id: 2,
        text: 'social event tuesday night',
        priority: 'medium'
    },
    {
       id: 3,
       text: "exercise at gym after days off",
       priority: 'low'
         
    },
    {
       id: 4,
       text: 'shower first thing',
       priority: 'very high' 
    }
];

//create array of only text from todos
const todos_text_only = todos.map(function(todo) {
   return todo.text; 
});

console.log("todo text only: " + todos_text_only);

const links = document.querySelectorAll('a');
const links_array = Array.from(links);
const urls = links_array.map(function(a) {
    return a.href;
});
console.log("The array urls are: " + urls);

//create own version of map
function myMap(arr, callback) {
    const mappedArray = [];
    for(let i=0; i<arr.length; i++) {
        const val1 = callback(arr[i], i, arr) 
        mappedArray.push(val1);
    }
    return mappedArray;
}

const priority_map_array = myMap(todos, function(todo_priority) {
   return todo_priority.priority; 
});

console.log("priority map array: "+ priority_map_array);

const repeatedStrings = myMap(['a','b','c','d','e'], function(str, idx) {
    return str.repeat(idx); 
});

console.log("repeated strings: " + repeatedStrings);
