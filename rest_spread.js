/*write function that takes any 
number of arguments*/

function doubleArgs(){
    let arrayFromArguments = [].slice.call(arguments);
    return arrayFromArguments.map(function(arg){
        return arg * 2;
    })
} 

console.log(doubleArgs(3,4,5));

function sumify() {
    console.log(Array.from(arguments));
    const args = Array.from(arguments);
    return args.reduce((sum,val) => {
       return sum + val; 
    });
}

console.log(sumify(3,4,5));

function productify(){
    console.log(Array.from(arguments));
    const args2 = Array.from(arguments);
    return args2.reduce((product,val) => {
       return product * val; 
    });
}
console.log("products: ");
console.log(productify(3,4,5));

function exponentMultiple(){
    console.log(Array.from(arguments));
    const args3 = Array.from(arguments);
    return args3.reduce((result,val)=>{
       return result ** val; 
    });
}

console.log("exponents: ")
console.log(exponentMultiple(2,3,4));

const max_man = function(){
    const args = Array.from(arguments);
    return args.reduce((max,currVal)=>{
       return currVal > max ? currVal : max; 
    });
}

console.log(max_man(20,99,23));

const min_man = function(){
    const args = Array.from(arguments);
    return args.reduce((min,currVal)=>{
       return min < currVal ? min : currVal; 
    });
}

console.log(min_man(20,99,23));

function printMe(...nums){
    console.log(nums);
}

printMe(1,2,3);

function sumItAll(...nums){
    return nums.reduce((sum,val)=>sum + val);
}

console.log(sumItAll(1,2,3));

function sumItLongArrow(...numbers){
    return numbers.reduce((sum,n)=>{
       return sum + n; 
    });
}
console.log('sum it long arrow: ');
console.log(sumItLongArrow(1,2,3,4,1,1,1));

console.log('sum of rando1 is ' + sumItLongArrow(1,2,3,4,1,1,1));

const sumAll = (...values) => {
    return values.reduce((sum,n)=> sum + n);
}

console.log(sumAll(1,2,3));

function makeFamily(parent1, parent2, ...kids){
    console.log(parent1, parent2);
    console.log(kids);
}

makeFamily('judy','pamela','bonnie','junior','danny');

function makeFamily2(p1,p2,...k){
    return {
        parents: [p1,p2],
        children: k.length ? k : 0
    };
}
console.log("object of family: ");
const newFamily = makeFamily2('judy','pamela','bonnie','junior','danny');

console.log(newFamily.parents, newFamily.children);

const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type);
};

console.log(filterByType('string', 23, 45, true, false, "hello", undefined));
console.log(filterByType('number', 3, 5, true, false));

const spreadNumbers = [4, 5, 88, 123, 0.92, 34];
console.log(spreadNumbers);
const maxSpread1 = Math.max(spreadNumbers);
const maxSpred2 = Math.max(...spreadNumbers);
console.log("max spread without spread" + maxSpread1);
console.log("max spread with spread" + maxSpred2);

console.log("filter by types: ");
const filterByType2 = (type, ...vals) => {
  return vals.filter((v) => typeof v === type);  
};

console.log(filterByType2('number', 23, 44, 55, true, false, 'walrus'));

const the_things_1 = [23, 33, 44, 57, true, false, "hurricane", undefined, "wind"];

console.log("filter by type without spread: ");
console.log(filterByType2('string', the_things_1));
console.log('filter by type with spread :');
console.log(filterByType2('string', ...the_things_1));
console.log(filterByType2('number', ...the_things_1));

console.log('testing console log');
console.log(...the_things_1);
console.log(..."Hurricane Warning");

const hurricane_list = ["Hurricane Hermine", "Hurricane Irma", "Hurricane Ian", "Hurricane Nicole"];
console.log(hurricane_list);
console.log("making copy: ");
const hurricane_list_copy = hurricane_list.slice();
console.log(hurricane_list_copy);
const hurricane_list_copy_spread = [...hurricane_list];
console.log("making copy with spread: " + hurricane_list_copy_spread);
console.log("add hurricane name using spread: ");
const hurricane_list_added = [...hurricane_list, "Hurricane Eta"];

console.log(hurricane_list_added);

console.log("combining multiple arrays using spread: ");

const hurricanes_2004 = ['hurricane frances 140 mph', 'hurricane jeanne 140 mph'];
const hurricanes_2016 = ['hurricane hermine 140 mph', 'hurricane matthew 136 mph'];
const hurricanes_2022 = ['hurricane ian 165 mph', 'hurricane nicole 154 mph'];
const severe_storms = ['july 2004 severe storm', 'july 2017 severe storm', 'june 2022 severe storm'];

const all_hurricanes_years = [...hurricanes_2004, ...hurricanes_2016, "hurricane irma 2017 142 mph", ...hurricanes_2022];
console.log(all_hurricanes_years);

const vowels = 'aeiou';
const vowel_split = vowels.split('');
const vowelArr = [...vowels];

console.log('split the vowels: ');
console.log(vowels);
console.log('vowels split: ' + vowel_split);
console.log('vowels spread: ' + vowelArr);

console.log('object and spread: ');

const hurricane_object = {
    name: 'Hurricane Ian',
    wind_speed: '165 mph',
    category: 'Category 5'
};

console.log(hurricane_object);

const hurricane_object_edited = {...hurricane_object, severity_rank: 1};
console.log(hurricane_object_edited);

console.log("combining objects: ");
const tea = {
    type: 'oolong',
    name: 'winter sprout',
    origin: 'taiwan'
};
console.log(tea);

const teaData = {
    steepTime: '30s',
    brewTemp: 175
}
console.log(teaData);
console.log("combined: ");
const fullTea = {...tea, ...teaData};
console.log(fullTea);

