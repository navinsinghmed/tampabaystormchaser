document.addEventListener('mousemove',function(e) {
    const r = Math.round(e.pageX * 255 / window.innerWidth);
    const b = Math.round(e.pageY * 255 / window.innerHeight);
    const color = `rgb(${r}, 100, ${b})`;
    document.body.style.backgroundColor = color;
    console.log(color);
});

const form = document.querySelector('#HurricaneForm');
form.addEventListener('submit', function(){
   console.log("you submitted the Hurricane Form"); 
});

const form2 = document.querySelector('#logoform');

const Hurricane_Name_Input = document.querySelector('input[name="Name_Hurricane"]');
const Hurricane_Wind_Input = document.querySelector('input[name="MaxVelocity"]');
const colorInput = document.querySelector('input[name="color"]'); 
const fontSizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results');

form2.addEventListener('submit', function(e) {
   e.preventDefault(); 
   const newHurricane = makeHurricane(Hurricane_Name_Input.value, Hurricane_Wind_Input.value, colorInput.value, fontSizeInput.value);
   results.appendChild(newHurricane); 
});

function makeHurricane(text1, text2, color, size) {
    const HurricaneData = document.createElement('h2');
    const text3 = text1 + ' ' + text2;
    HurricaneData.innerText = text3;
    HurricaneData.style.color = color;
    HurricaneData.style.fontSize = size + 'px';
    return HurricaneData;
}


document.addEventListener('keypress', function(e) {
   console.log(e.key); 
});

const removeButtons = document.querySelectorAll('li button');

for(let btn of removeButtons) {
    btn.addEventListener('click', function(e) {
        e.target.parentElement.remove();       
    });   
}

const form_Hurricane = document.querySelector('#add_hurricane');
const form_Input_Hurricane = document.querySelector('#Hurricane_Name_In_Form');
const Hurricane_Name_List_Result = document.querySelector('#hurricane_recent_list');

form_Hurricane.addEventListener('submit', function(e) {
   e.preventDefault();
   console.log(form_Input_Hurricane.value);
   const new_Hurricane_Name = document.createElement('li');
   const removeBtn = document.createElement("button");
   removeBtn.innerText = 'Remove Hurricane Name?';
   removeBtn.addEventListener('click', function(e_added_button) {
       e_added_button.target.parentElement.remove();
   });
   new_Hurricane_Name.innerText = form_Input_Hurricane.value;
   new_Hurricane_Name.appendChild(removeBtn);
   form_Input_Hurricane.value = ''; 
   Hurricane_Name_List_Result.appendChild(new_Hurricane_Name);
});

const ul_data = document.querySelector('#worst_hurricanes_ul_id');
ul_data.addEventListener('click', function(e) {
   console.log(e.target.getAttribute('data-year'));
   console.log(e.target.dataset);
   console.log(e.target.dataset.category); 
});
