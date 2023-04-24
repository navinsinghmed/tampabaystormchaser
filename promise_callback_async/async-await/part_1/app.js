let favorite_number = 7;
let base_URL = "http://numbersapi.com"


async function single_favorite_number() {
    let number_info = await $.getJSON(`${base_URL}/${favorite_number}?json`);
    console.log(number_info)    
}

single_favorite_number();

let favorite_numbers_list = [3,5,7];
async function favorite_numbers() {
    let numbers_info = await $.getJSON(`${base_URL}/${favorite_numbers_list}?json`);
    console.log(numbers_info)
}
favorite_numbers();

async function fact_4() {
    let fact_4_info = await Promise.all(
        Array.from({ length: 4 }, () => $.getJSON(`${base_URL}/${favorite_number}?json`))
    );
    fact_4_info.forEach(data => {
        $('body').append(`<p>${data.text}</p>`);
    });
}
fact_4();