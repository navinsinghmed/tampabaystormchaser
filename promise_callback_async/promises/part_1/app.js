let favorite_number = 7;
let base_URL = "http://numbersapi.com";

$.getJSON(`${base_URL}/${favorite_number}?json`).then(element_info => {
    console.log(element_info);
});

let favorite_numbers_list = [3,5,7];
$.getJSON(`${base_URL}/${favorite_numbers_list}?json`).then(element_info => {
    console.log(element_info);
});

Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${base_URL}/${favorite_number}?json`);
    })
).then(contention => {
   contention.forEach(element_info => $("body").append(`<p>${element_info.text}</p>`)); 
});
