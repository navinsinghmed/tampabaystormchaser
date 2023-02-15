function filterOutOdds(){
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num){
       return num % 2 === 0; 
    });
}

console.log('filter out odds: ' + filterOutOdds(1,2,3,4,5,6));
console.log("filter out odds using ... ");

const filterOutThoseOdds = (...args) => args.filter(v => v % 2 === 0);
console.log(filterOutThoseOdds(1,2,3,4,5,6));

console.log("find min: ");
const findMin = (...args) => Math.min(...args);
console.log(findMin(1,4,12,-3));

console.log("filter out evens: ");
const filterOutEvens = (...args) => args.filter(v => v % 2 !== 0);
console.log(filterOutEvens(1,2,3,4,5,6));

console.log('find max: ');
const findMax = (...args) => Math.max(...args);
console.log(findMax(1,2,4,7,9));

console.log("less than ten: ");
const lessThanTen = (...args) => args.filter(v => v < 10);
console.log(lessThanTen(1,3,6,13,20));

console.log('greater than ten: ');
const greaterThanTen = (...args) => args.filter(v => v > 10);
console.log(greaterThanTen(1,3,6,13,20));

const mergeObjects = (obj1, obj2) =>({...obj1, ...obj2});
console.log('merging simple objects: ');
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));

console.log("return array and double return args: ");
const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)];
console.log(doubleAndReturnArgs([1,2,3], 4, 4));

console.log("remove a random element in the items array and return a new array without the item.");

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idx), ...items.slice(idx + 1)];   
}

const array_hurricanes = [142, 140, 138, 140, 165, 154];
console.log(array_hurricanes);
console.log("remove random: " + removeRandom(array_hurricanes));

const array_hurricanes_previous = [80, 100, 125];
console.log("combine arrays: ");
const extend = (array1, array2) => {
    return [...array1, ...array2];
}
console.log(extend(array_hurricanes_previous, array_hurricanes));

console.log("return new object with all keys and values and new key val pair: ");
const obj_hurricane_1 = {
    name: "Hurricane Ian",
    max_wind: "165 mph",
    category: "Category 5"
    }
console.log(obj_hurricane_1);
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;    
}
console.log(addKeyVal(obj_hurricane_1, "rank", 1));
const addKeyVal_Enhancement = (obj, key, val) => {
    return {...obj, [key]: val};
}
console.log("add key and value: ");
console.log(addKeyVal_Enhancement(obj_hurricane_1, "rank", "1, strongest hurricane"));
const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;   
}
console.log("remove key and value: ");
console.log(removeKey(obj_hurricane_1,"category"));
console.log("original object: ");
console.log(obj_hurricane_1);

console.log("remove key and value using object enhancement: ");
const removeKeyEnhanced = (obj, key) => {
    ({[key]: undefined, ...obj} = obj);
    return obj;
}
console.log(removeKeyEnhanced(obj_hurricane_1, "category"));
console.log("original object: ");
console.log(obj_hurricane_1);
console.log("creating a separate object: ");
const obj_hurricane_2 = {
    name2: "Hurricane Irma",
    max_wind2: '142 mph'
}
console.log(obj_hurricane_2);

console.log("combining objects");

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}
console.log(combine(obj_hurricane_1, obj_hurricane_2));

const update = (obj, key, val) => {
    return {...obj, [key]: val};
}
console.log('update key and val');
console.log(update(obj_hurricane_2, "max_wind2", "185 mph"));
