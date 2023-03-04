// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

let number_Of_Categories = 6;
let questions_Per_Category = 5;
let categories = [];

function mixer(array, number_To_Return){
    let goal_Count = array.length;
    
    while(goal_Count >= 1) {
        let random_Index = Math.floor(Math.random()*goal_Count);
        goal_Count--;
        let middleMan = array[goal_Count];
        array[goal_Count] = array[random_Index];
        array[random_Index] = middleMan;
    }
    let game_array = array.slice(0, number_To_Return);
}

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
    const jservice_url = 'http://jservice.io/api/http://jservice.io/api/category?id=150';
    const res = await axios.get(jservice_url);
    let categories = res.data.map((category) => ({
        id: category.id,
        title: category.title
    }));
    categories = mixer(categories, number_Of_Categories);
    return categories;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */

async function getCategory(catId) {
    const url = `https://jservice.io/api/category?id=${catId}`;
    const res = await axios.get(url);
    let { title, clues } = res.data;
    clues = clues.map((clue) => ({
        question: clue.question,
        answer: clue.answer,
        showing: null
    }));
    clues = mixer(clues, questions_Per_Category);
    return {
        title,
        clues
    };   
}

async function retrieve_deep_game_info(){
    const id_Categories = await getCategoryIds();
    for(let elemental of id_Categories) {
        categories.push(await getCategory(elemental.id));
    }
    return categories;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */

async function fillTable(callback) {
    let $thead = $('<thead>');
    let $tr = $('<tr>');
    $tr.appendTo($thead);
    
    const cat_list = await retrieve_deep_game_info();
    for(let x of categories) {
        const category_title = category.title.toUpperCase();
        const $th = $('<th>').text(`${category_title}`);
        $th.appendTo($tr);
    }
    
    const $tbody = $('<tbody>');
    for(let vertical = 0; vertical < questions_Per_Category; vertical++) {
          let $row = $('<tr>', {
              id: `row${vertical}`
          }).appendTo($tbody);
          
          for(let horiz = 0; horiz < number_Of_Categories; horiz++) {
              $('<td>', {
                  id: `${vertical}-${horiz}`,
                  text: '?'
              }).appendTo($row);
          }  
    }
    
    const $table = $('<table>', {
        id: 'boardHtml'
    });
    $thead.appendTo($table);
    $tbody.appendTo($table);
    $('#start').after($table);
    
    $('#boardHtml').on('click', 'td', handleClick);
    callback();
    
}


/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    const target = evt.target;
    const $targetId = $(target).attr('id');
    const $targetIdX = $targetId[2];
    const $targetIdY = $targetId[0];
    const clues = categories[$targetIdX].clues;
    if(clues[$targetIdY].showing === 'answer') return;
    if(clues[$targetIdY].showing === 'null'){
        clues[$targetIdY].showing = 'question';
        $(target).text(`${clues[$targetIdY].question}`);
    } else if (clues[$targetIdY].showing === 'question'){
        clues[$targetIdY].showing = 'answer';
        $(target).text(`${clues[$targetIdY].answer}`);
    }
    
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {
    $('#boardHtml').remove();
    categories = [];
    $('body').off('click', '#start', setupAndStart);
    let $spinner = `<div id="spinner"><img src = "loading.gif" alt ="" /></div>`;
    $(`#start`).after($spinner);
}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    $('#start').removeClass('disabled').text('Restart!');
    $('#spin-container').hide();
    $("#spinner").remove();
    $('body').on('click', '#start', setupAndStart);
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart(evt) {
    showLoadingView();
    await fillTable(hideLoadingView);
}

const $body = $('body');
const $h1 = $('<h1>', {
   id: 'title',
   text: 'JEOPARDY!' 
});
$body.prepend($h1);
$("#title").after("<button id='start'>Start Game!</button>");

/** On click of start / restart button, set up game. */
$('#start').on('click', setupAndStart);
// TODO

/** On page load, add event handler for clicking clues */
$(async function () {
        $('#jeopardy').on('click', 'td', handleClick); 
});
