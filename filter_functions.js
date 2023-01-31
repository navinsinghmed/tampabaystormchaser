const words = [
    'tropical',
    'and',
    'hurricane',
    'land',
    'storm',
    'wind',
    'extreme',
    'jjjggg'
];

const longWords = words.filter(function(word) {
   return word.length >= 5;
}); 

console.log("Filter methods: ");
console.log("Long Words: " + longWords);
                               
const words_W_H = words.filter(function(word_passed_in) {
    return word_passed_in[0] === 'w' || word_passed_in[0] === 'h';
});

console.log("W or H Starting Words: " + words_W_H);                               


const containsVowel = function(the_word){
    for(let char of the_word){
        if(isVowel(char)) return true;
    }
    return false;
}

const isVowel = function(char){
    return 'aeiou'.indexOf(char) !== -1; 
}

console.log("testing the vowel function, is 'a' a vowel? : " + isVowel('a'));
console.log("testing the vowel function, is 'b' a vowel? : " + isVowel('b'));


console.log("Does 'hurricane' contain a vowel? " + containsVowel('hurricane'));
console.log("Does 'bghhjk' contain a vowel? " + containsVowel('bghhjk'));

const contain_Vowels_Constant = words.filter(containsVowel);
const no_Vowels_Constant = words.filter(function(word) {
   return !containsVowel(word); 
});

console.log("Contains Vowels: " + contain_Vowels_Constant);
console.log("No vowels: " + no_Vowels_Constant);


