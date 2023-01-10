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