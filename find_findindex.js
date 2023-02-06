const scores = [0,0,0,5,10,55,60,73,78,83,95,99];
let a = scores.find(function(score){
    return score > 75;
})

console.log("first score over 75: "+ a);

let even_score = scores.find(function(score){
   return score !== 0 && score % 2 === 0; 
});

console.log("first even nonzero score " + even_score);

const all_even_scores = scores.filter(function(score){
    return score % 2 === 0;
});

console.log("all even scores " + all_even_scores);

const firstEvenIndex = scores.findIndex(function(score) {
   return score !== 0 && score % 2 === 0; 
});

console.log("index of first even nonzero score: " + firstEvenIndex);

function partition(arr, pivot) {
    const pivotIdx = arr.findIndex(function(el) {
       return el > pivot; 
    });
    console.log(`first index greater than ${pivot} is ` + pivotIdx);
    const left = arr.slice(0,pivotIdx);
    const right = arr.slice(pivotIdx);
    let arr2 = [left, right];
    console.log(`before pivot of ${pivot} is ${left}`);
    console.log(`after pivot of ${pivot} is ${right}`);
    
}

partition(scores, 55);

function myFind(arr, callback){
 for(let i = 0; i < arr.length; i++){
    if(callback(arr[i],i,arr)) {
        return arr[i]; 
    }
 }   
}

const found = myFind(scores, function(x){
    return x > 96; 
});

console.log("i found: " + found);

let no_score = scores.findIndex(function(score){
   return score > 100; 
});

console.log("score over 100 index? " + no_score);

function myFindIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr) === true) {
          return i;  
        }
    }
    return -1;
}

let no_score_index = myFindIndex(scores, function(score){
   return score !==0 && score % 2 == 0; 
});


console.log("first nonzero even index: " + no_score_index);



//find user by name
const users_exercise = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
];

function findUserByUsername(user_array, username) {
    return user_array.find(function(key_value_element){
        return key_value_element.username === username;
    })
}
  
let obj1 = findUserByUsername(users_exercise, 'mlewis'); // {username: 'mlewis'}
let obj2 = findUserByUsername(users_exercise, 'taco'); // undefined
console.log(obj1);
console.log(obj2);

//remove user function
function removeUser(user_array, username) {
    let foundIndex = user_array.findIndex(function(user){
       return user.username === username; 
    })
    if(foundIndex === -1) return;
    
    return user_array.splice(foundIndex,1)[0];
}

let obj_remove_1 = removeUser(users_exercise, 'akagen'); // {username: 'akagen'}
let obj_remove_2 = removeUser(users_exercise, 'akagen'); // undefined
console.log(obj_remove_1);
console.log(obj_remove_2);