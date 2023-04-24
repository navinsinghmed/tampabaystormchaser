let favorite_number = 3;
let baseURL = "http://numbersapi.com";

$.getJSON(`${baseURL}/${favorite_number}?json`, function(data){
    console.log(data);
});

let favorite_numbers_list = [3, 7, 11];
$.getJSON(`${baseURL}/${favorite_numbers_list}?json`, function(data){
   console.log(data); 
});

let number_facts = [];
$.getJSON(`${baseURL}/${favorite_number}?json`, function(element_info) {
  number_facts.push(element_info.text);
  $.getJSON(`${baseURL}/${favorite_number}?json`, function(element_info) {
    number_facts.push(element_info.text);
    $.getJSON(`${baseURL}/${favorite_number}?json`, function(element_info) {
      number_facts.push(element_info.text);
      $.getJSON(`${baseURL}/${favorite_number}?json`, function(element_info) {
        number_facts.push(element_info.text);
        number_facts.forEach(fact => {
            $("body").append(`<p>${fact}</p>`);
        });  
      });  
    });  
  }); 
});