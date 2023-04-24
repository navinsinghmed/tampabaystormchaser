$(function() {
    let baseURL = "https://pokeapi.co/api/v2";
    
    async function part1() {
        let pokemon_data = await $.getJSON(`${baseURL}/pokemon/?limit=1000`);
        console.log(pokemon_data);
    }
    
    async function part2() {
        let all_Pokemon = await $.getJSON(`${baseURL}/pokemon/?limit=1000`);
        let random_pokemon_URLS = [];
        for(let i = 0; i < 3; i++) {
            let random_index = Math.floor(Math.random() * all_Pokemon.results.length);
            let select_URL = all_Pokemon.results.splice(random_index, 1)[0].url;
            random_pokemon_URLS.push(select_URL);
        }
        let full_pokemon_info = await Promise.all(
            random_pokemon_URLS.map(select_URL => $.getJSON(select_URL))
        );
        full_pokemon_info.forEach(pokemon_element => console.log(pokemon_element));
    }
    
    async function part3() {
        let full_data = await $.getJSON(`${baseURL}/pokemon/?limit=1000`);
        let random_pokemon_URLS = [];
        for(let i = 0; i < 3; i++) {
            let random_index = Math.floor(Math.random() * full_data.results.length);
            let url = full_data.results.splice(random_index, 1)[0].url;
            random_pokemon_URLS.push(url);
        }
        let pokemon_data = await Promise.all(
            random_pokemon_URLS.map(url => $.getJSON(url))
        );
        let speciesData = await Promise.all(
            pokemon_data.map(p => $.getJSON(p.species.url))
        );
        descriptions = speciesData.map(d => {
            let descriptionObj = d.flavor_text_entries.find(
                entry => entry.language.name === "en"
            );
            return descriptionObj
                ? descriptionObj.flavor_text
                : "No description available.";
        });
        descriptions.forEach((desc, i) => {
            console.log(`${pokemonData[i].name}: ${desc}`);
        });       
    }
    
    let $btn = $("button");
    let $pokeArea = $("#pokemon-area");
    
    $btn.on("click", async function() {
        $pokeArea.empty();
        let allData = await $.getJSON(`${baseURL}/pokemon/?limit=1000`);
        let randompokemon_URLS = [];
        for(let i = 0; i < 3; i++) {
            let randomIdx = Math.floor(Math.random() * allData.results.length);
            let url = allData.results.splice(randomIdx, 1)[0].url;
            randompokemon_URLS.push(url);    
        }
        let pokemon_data = await Promise.all(
            randompokemon_URLS.map(url => $.getJSON(url))
        );
        let speciesData = await Promise.all(
            pokemon_data.map(p => $.getJSON(p.species.url))  
        );
        speciesData.forEach((x, i) => {
            let description_obj = x.flavor_text_entries.find(function(entry) {
                return entry.language.name === "en";
            });
            let description = description_obj ? description_obj.flavor_text : "";
            let name = pokemon_data[i].name;
            let imgSrc = pokemon_data[i].sprites.front_default;
            $pokeArea.append(makePokeCard(name, imgSrc, description));
        });
    });
        
        
    function makePokeCard(name, imgSrc, description) {
        return `
            <div class="card">
                <h1>${name}</h1>
                <img src=${imgSrc} />
                <p>${description}</p>
                </div>
                `;
        }
    });
