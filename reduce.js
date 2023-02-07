const nums = [ 20, 30, 50, 12, -2, 45, 99, 19, 22, 85 ];
console.log("Array: " + nums);

let total = 0;
for(let num of nums){
    total += num;
}

console.log("sum is " + total);

let min = nums[0];
for(let i = 1; i < nums.length; i++) {
    if(nums[i] < min) {
        min = nums[i];
    }
}
console.log("minimum value is " + min);

const str = "lollapalooza";
const charFreq = {};
for(let char of str){
    if(charFreq[char]){
        charFreq[char] += 1;
    }
    else {
    charFreq[char] = 1;
    }
}

console.log("char frequency: ");
console.log(charFreq);

const warning = ["Hurricane", "Warning", "Tampa", "Bay"];
const result = warning.reduce(function(accum, nextWord) {
   return accum + " " + nextWord;
    
});

console.log(result);

const midScores = [70,88,93,94,64,62,56];
const minScore = midScores.reduce(function(min, nextScore){
   if(nextScore < min) {
       return nextScore;
   } 
   return min;
});

const minScore_ternary = midScores.reduce(function(min_number, nextScore_number) {
    return nextScore_number < min_number ? nextScore_number : min_number;
});
console.log("minimum score: " + minScore);
console.log("minimum score ternary: " + minScore_ternary);

const maxScore = midScores.reduce(function(max, nextScore) {
   return nextScore > max ? nextScore : max; 
});
console.log("maximum score: " + maxScore);

const windRecords = [100, 110, 124, 127, 136, 136, 134, 128];
const maximumWinds = [140, 142, 140, 138, 140, 136, 165, 154];

const minWind = maximumWinds.reduce(function(min, nextWind) {
   return nextWind < min ? nextWind : min; 
});

console.log("minimum winds of the max winds array: " + minWind);
const minWindRecord = windRecords.reduce(function(min, next) {
   return next < min ? next : min; 
});

console.log("minimum wind of wind records array: " + minWindRecord);

const lowestOfAllWind = maximumWinds.reduce(function(min, next) {
  return next < min ? next : min;  
}, minWindRecord);

console.log("lowest of all wind: " + lowestOfAllWind);

//extract value
const hurricane_data = [{wind_speed: "165 mph"}, {wind_speed: "154 mph"}, {wind_speed: "142 mph"}];
console.log(hurricane_data);
function printData(obj1){
    for(let i = 0; i < obj1.length; i++){
        console.log(obj1[i]);
    }
}

printData(hurricane_data);

function extractValue(arr, key){
    return arr.reduce(function(acc,next) {
       acc.push(next[key]);
       return acc; 
    },[]);
}

const hurricane_values = extractValue(hurricane_data, 'wind_speed');
console.log("hurricane wind values: " + hurricane_values);

//extract the category
const hurricane_categories = [{category: "5, 165 mph"}, {category: "4, 142 mph"}, {category: "4, 154 mph"}];
printData(hurricane_categories);

function extractCategories(arr, key){
    return arr.reduce(function(acc,next){
       acc.push(next[key]);
       acc.push("------");
       return acc; 
    },[]);
}

const cat_values = extractCategories(hurricane_categories, 'category');
console.log("category values are: " + cat_values);

//vowel count function
const hurricane_string = "hurricane";
const cyclone_string = "cyclone";
const surge_string = "storm surge";
const full_weather_impacts = "hurricane wind storm surge";

console.log(hurricane_string);
console.log(full_weather_impacts);

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let lowerCased = next.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            }
            else {
                acc[lowerCased] = 1;
            }    
        }
        return acc;
    },{});
}

const hurricane_string_count = vowelCount(hurricane_string);
const cyclone_string_count = vowelCount(cyclone_string);
const surge_string_count = vowelCount(surge_string);
const full_weather_impacts_count = vowelCount(full_weather_impacts);
//object so only need to state console.log to print
//in arrays use the printData array printer
console.log(`vowel count of ${hurricane_string} is `);
console.log(hurricane_string_count);

console.log(`vowel count of ${cyclone_string} is `);
console.log(cyclone_string_count);

console.log(`vowel count of ${surge_string} is `);
console.log(surge_string_count);

console.log(`vowel count of ${full_weather_impacts} is `);
console.log(full_weather_impacts_count);

const wind_array_objects = [{wind: '165 mph'}, {wind: '154 mph'}, {wind: '142 mph'}];
console.log(wind_array_objects);
printData(wind_array_objects);

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);   
}

const added_wind_array_objects = addKeyAndValue(wind_array_objects, "Cyclone Type", "Hurricane");
printData(added_wind_array_objects);
for(let j = 0; j < added_wind_array_objects.length; j++) {
    console.log(added_wind_array_objects[j]);   
}

const first_eight = [1,2,3,4,5,6,7,8];

function evenTest(x){
    return x % 2 === 0;
}

function partition(array1, condition){
    return array1.reduce(function(arrayDivided,next){
        if(condition(next)){
            arrayDivided[0].push(next);
        } else {
            arrayDivided[1].push(next);
        }
        return arrayDivided;
    },[[],[]]);   
}

const divided_array_main = partition(first_eight,evenTest);
printData(divided_array_main);