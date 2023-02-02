/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let arrDoubled = [];
    arr.forEach(function(x) {
        arrDoubled.push(x*2);
    });
    return arrDoubled;
}

const arr1 = [1,3,5,7,9];
const double_array = doubleValues(arr1);
console.log("here is the array of double values " + double_array);

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let arrEven = [];
    arr.forEach(function(value) {
        if(value%2 === 0){
            arrEven.push(value);
        }
    });
    return arrEven;
}
const even1 = [5,1,2,3,10];
const evens_only = onlyEvenValues(even1);
console.log("only even values in array: " + evens_only);

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let firstLastArr = [];
    //x is string element array
    arr.forEach(function(x){
        firstLastArr.push(x[0] + x[x.length-1]);
    });
    return firstLastArr;    
}
const word_list = ['walrus', 'hurricane', 'cyclone'];
const first_last_letters_elements = showFirstAndLast(word_list);
console.log('first last letters of array elements: ' + first_last_letters_elements);


/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

const hurricaneObject = [
        {
            name: "Ian", 
            category: "5"
        },
        {
            name: "Irma",
            category: "4"
        },
        {
            name: "Eta",
            category: "4"
        }
    ];

function my_print_Object(obj) {
    for(let i=0; i < obj.length; i++){
        console.log(obj[i]);
    }
}
//use my print_Object_function
my_print_Object(hurricaneObject);

function addKeyAndValue(arr,key,value){
    arr.forEach(function(x){
        x[key] = value;
    });
    return arr;
}
let cc = "cyclone classification";
let value_added = "hurricane";
const complete_hurricane_Object = addKeyAndValue(hurricaneObject, cc, value_added);
 
my_print_Object(complete_hurricane_Object); 


/*
Write a function called vowelCount 
which accepts a string and 
returns an object with the keys
as the vowel and the values 
as the number of times the 
vowel appears in the string. 
This function should be case 
insensitive so a lowercase letter 
and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') 
    // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
   let array_split = str.split("");
   let count_obj = {};
   const vowels = "aeiou";
   
   array_split.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase();
      if(vowels.indexOf(lowerCasedLetter) !== -1) {
          if(count_obj[lowerCasedLetter]) {
              count_obj[lowerCasedLetter]++;
          }
          else {
              count_obj[lowerCasedLetter] = 1;
          }
      } 
   });
   
   return count_obj;
}

function print_that_Object(obj1) {
    for(let i = 0; i < obj1.length; i++) {
        console.log(obj1[i]);
    }
}

const string_to_test = "hurricane";
const test_vowels_Object = vowelCount(string_to_test);
console.log("vowel count object for " + string_to_test + " is ");
console.log(test_vowels_Object);

/*
Write a function called doubleValuesWithMap 
which accepts an array and returns a new 
array with all the values in the array 
passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2; 
    });
}

const arrayToMap = [1, 2, 3, -2, -4];
const doubleMap = doubleValuesWithMap(arrayToMap);
console.log("doubled array maped: " + doubleMap);

/*
Write a function called valTimesIndex which 
accepts an array and returns a new array 
with each value multiplied by the index 
it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(value, index) {
        return value * index;
    });
}

const indexValueProduct = valTimesIndex(arrayToMap);
console.log("index and value products array: " + indexValueProduct);

/*
Write a function called extractKey which 
accepts an array of objects and some key 
and returns a new array with the value 
of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, 
                {name: 'Tim'}, 
                {name: 'Matt'}, 
                {name: 'Colt'}], 'name') 
    // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(val) {
        return val[key];
    });
}

const array_of_hurricane_wind_speed_objects = [{wind_speed: "Hurricane Hermine 140 mph"}, {wind_speed: "Hurricane Ian 165 mph"}, {wind_speed: "Hurricane Eta 140 mph"}];
console.log(array_of_hurricane_wind_speed_objects);
console.log(print_that_Object(array_of_hurricane_wind_speed_objects));

const array_keys = extractKey(array_of_hurricane_wind_speed_objects, "wind_speed");
console.log(array_keys);


/*
Write a function called extractFullName 
which accepts an array of objects and 
returns a new array with the value 
of the key with a name of "first" 
and the value of a key with the 
name of  "last" in each object, 
concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, 
                     {first: 'Tim', last:"Garcia"}, 
                     {first: 'Matt', last:"Lane"}, 
                     {first: 'Colt', last:"Steele"}]) 
    // ['Elie Schoppik', 'Tim Garcia', 
        'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map(function(val) {
       return val.first + " " + val.last; 
    });
}

const names_array = [{first: 'Elie', last:"Schoppik"}, 
{first: 'Tim', last:"Garcia"}, 
{first: 'Matt', last:"Lane"}, 
{first: 'Colt', last:"Steele"}];

const extractedNames = extractFullName(names_array);
console.log(extractedNames);


/*
Write a function called 
filterByValue which accepts an array 
of objects and a key and returns a new 
array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, 
                   {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(val) {
       return val[key] !== undefined; 
    });
}

const cat_container = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, 
{first: 'Colt', last:"Steele", isCatOwner: true}];


function my_print_Object2(obj) {
    for(let i=0; i < obj.length; i++){
        console.log(obj[i]);
    }
}

const cat_people = filterByValue(cat_container, "isCatOwner");
my_print_Object2(cat_people);

/*
Write a function called find which accepts an array and a value and 
returns the first element in the array that has the same value as 
the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr2, searchValue) {
    return arr2.filter(function(v) {
        return v === searchValue;
    });
}

const wind_max = [142, 165, 154, 140, 140];
const wind_filtered = find(wind_max, 142);
console.log(wind_filtered);



/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
       return val[key] === searchValue; 
    });
}

const hurricane_obj_2023 = [{name: "Hurricane Ian", wind: "165 mph", category: 5}, {name:"Hurricane Irma", wind: "142 mph", category: 4}];
const is_category4 = findInObj(hurricane_obj_2023, "category", 4);
console.log(hurricane_obj_2023);
console.log(is_category4);
my_print_Object(hurricane_obj_2023);
my_print_Object2(is_category4);

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(val) {
       return vowels.indexOf(val) === -1;  
    }).join("");
}

const hurricane_string1 = "Hurricane";
const hurricane_string_no_vowels = removeVowels(hurricane_string1);
console.log(hurricane_string_no_vowels);

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(function(val) {
        return val % 2 !== 0;
    }).map(function(val) {
        return val * 2;  
    });
}

const numberFun = [1,2,3,4,5];
const new_double_odd = doubleOddNumbers(numberFun);
console.log(new_double_odd);
