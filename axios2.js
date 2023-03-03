console.log("Axios testing");

async function getData(){
    const response = await axios.get('https://swapi.dev/api/planets');
    console.log(response);
    for(let planet of response.data.results){
        console.log(planet.name);
    }
    console.log("This line is after axios.get");
}

async function getData2(){
    const response = await axios.get('https://swapi.dev/api/planets');
    const { next, results } = response.data;
    for(let planet of results){
        console.log(planet.name);
    }
    const response2 = await axios.get(next);
    const results2 = response2.data.results;
    console.log(results2);
    for(let planet of results2) {
        console.log(planet.name);
    }
}

getData();
console.log("writing function with destructuring and getting more planets: ");
getData2();
console.log("I am the walrus");

async function getLaunches(){
    const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    renderLaunches(res.data);
}

function renderLaunches(launches) {
    const ul = document.querySelector("#launches");
    console.log("launch info: ");
    console.log(launches);
    for(let launch of launches){
        ul.append(makeLaunchLI(launch));
        
    }   
}

function makeLaunchLI(launch){
    const newLI = document.createElement('LI');
    const mission = document.createElement("B");
    mission.innerText = launch.mission_name;
    newLI.append(mission);
    newLI.innerHTML += ` - ${launch.rocket.rocket_name}`;
    return newLI;        
}

const btn = document.querySelector('#getLaunches');
btn.addEventListener('click', getLaunches);

//use dog images:
// https://dog.ceo/api/breeds/image/random

async function getRandomDog() {
    const res = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log("random doggie: ");
    console.log(res.data);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
}

getRandomDog();

async function getDogByBreed(breed){
    try {
        const url = `https://dog.ceo/api/breed/${breed}/images/random`;
        const res = await axios.get(url);
        const img = document.querySelector("#dog2");
        img.src = res.data.message;
    }
    catch(e){
        alert("breed not found!");
        getRandomDog();
    }   
}

getDogByBreed('hound');
getDogByBreed('hurricane');
const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener("submit", function(e){
   e.preventDefault();
   getDogByBreed(input.value);
   input.value = ''; 
});