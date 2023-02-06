let numberList = [1,2,2,2,2,2,4];
let numberList2 = [2,2,2,2,2,4];

function hasOddNumber(arr) {
    return arr.some(function(x) {
        return x % 2 !== 0;
    })
}

let odd_boolean1 = hasOddNumber(numberList);

console.log(`The array ${numberList} has odd numbers: ${odd_boolean1}`);

let odd_boolean2 = hasOddNumber(numberList2);

console.log(`The array ${numberList2} has odd numbers: ${odd_boolean2}`);


//has zero function:
let a = 23201;
let b = 12121;

function hasAZero(num) {
    return num.toString().split('').some(function(val){
       return val === '0'; 
    });
}

let a_bool = hasAZero(a);
let b_bool = hasAZero(b);

console.log(`${a} has a zero: ${a_bool}`);
console.log(`${b} has a zero: ${b_bool}`);

//has one function
let c = 23424;

function hasAOne(num) {
    return num.toString().split('').some(function(val) {
       return val === '1'; 
    });
}

let c_bool = hasAOne(c);
console.log(`${c} has a one: ${c_bool}`);

//has only odd numbers function
const odd_array = [1,3,5,7];
const odd_even_array = [1,2,3,5,7];

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val) {
       return val % 2 !== 0; 
    });
}

//has no duplicates
const has_no_duplicates1 = [1,2,3,1];
const has_no_duplicates2 = [1,2,3];

function hasNoDuplicates(arr) {
    return arr.every(function(val) {
       return arr.indexOf(val) === arr.lastIndexOf(val); 
    });
}

const bool_dup1 = hasNoDuplicates(has_no_duplicates1);
const bool_dup2 = hasNoDuplicates(has_no_duplicates2);
console.log(`${has_no_duplicates1} has no duplicates. + ${bool_dup1}`);
console.log(`${has_no_duplicates2} has no duplicates. + ${bool_dup2}`);

//has certain key
let arrayCat = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainKey(arr, key) {
    return arr.every(function(val){
       return key in val; 
    });
}


const catOwner1 =  hasCertainKey(arrayCat,'first') // true
const catOwner2 =  hasCertainKey(arrayCat,'isCatOwner') // false

console.log(`has first key: ${catOwner1}`);
console.log(`has isCatOwner key: ${catOwner2}`);

let arrValue = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
       return val[key] === searchValue; 
    });
}

const val1 = hasCertainValue(arrValue,'title','Instructor') // true
const val2 =  hasCertainValue(arrValue,'first','Elie') // false

console.log("has instructor: " + val1);
console.log("has first: " + val2);