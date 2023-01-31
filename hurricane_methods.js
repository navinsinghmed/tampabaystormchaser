const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const allCheckboxes_Array = Array.from(allCheckboxes);
console.log(allCheckboxes_Array);

const checked = Array.from(allCheckboxes).filter(function(box) {
   return box.checked; 
});

console.log(checked);

const completed_checked_items =checked.map(function(checkbox) {
   return checkbox.parentElement.innerText; 
});

console.log(completed_checked_items);

function extractCompletedItems() {
    return Array.from(allCheckboxes).filter(function(box) {
       return box.checked; 
    }).map(function(checkbox) {
       return checkbox.parentElement.innerText; 
    });
}

const completed_checked_items_2 = extractCompletedItems();
console.log(completed_checked_items_2);

const hurricane_Names_List = ['Nicole', 'Ian', 'Hermine', 'Eta'];

function myFilter(arr, callback){
    const filtered_Array = [];
    for(let i=0; i<arr.length; i++){
        if(callback(arr[i], i, arr)){
            filtered_Array.push(arr[i]);
        }
    }
    return filtered_Array;
}

const filtered_Hurricane_Names = myFilter(hurricane_Names_List, function(word){
   return word.length <= 5; 
});

console.log("Short Hurricane Names Only: " + filtered_Hurricane_Names);

const everyOtherName = myFilter(hurricane_Names_List, function(word1, index1){
   return index1%2 === 0; 
});

console.log(everyOtherName);