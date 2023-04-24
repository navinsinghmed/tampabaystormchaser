$(function() {
    let base_URL = "https://pokeapi.co/api/v2";
    
    $.getJSON(`${base_URL}/pokemon/?limit=1000`).then(element_info => {
      console.log(element_info); 
    });
    
    $.getJSON(`${base_URL}/pokemon/?limit=1000`)
      .then(element_info => {
        let random_pokemon_URLS = [];
        for (let i = 0; i < 3; i++) {
            let random_index = Math.floor(Math.random() * element_info.results.length);
            let url = element_info.results.splice(random_index, 1)[0].url;
            random_pokemon_URLS.push(url);
        }
        return Promise.all(random_pokemon_URLS.map(url => $.getJSON(url)));
    })
    .then(pokemon => {
        pokemon.forEach(p => console.log(p));
    });
    
    let names = null;
    $.getJSON(`${base_URL}/pokemon/?limit=1000`)
      .then(element_info => {
        let random_pokemon_URLS = [];
        for (let i = 0; i < 3; i++) {
            let random_index = Math.floor(Math.random() * element_info.results.length);
            let url = element_info.results.splice(random_index, 1)[0].url;
            random_pokemon_URLS.push(url);
        }
        return Promise.all(random_pokemon_URLS.map(url => $.getJSON(url)));
      })
      .then(element_info => {
          names = element_info.map(x => x.name);
          return Promise.all(element_info.map(z => $.getJSON(z.species.url)))
      })
      .then(element_info => {
          let elaboration = element_info.map(z => {
              let elaborate_object = z.flavor_text_entries.find(
                  entry => entry.language.name === "en"
              );
              return elaborate_object ? elaborate_object.flavor_text : "No description avaiable.";
          });
          elaboration.forEach((assertion, i) => {
              console.log(`${names[i]}:${assertion}`);
          });
      });
      
      let $btn = $("button");
      let $pokeArea = $("#pokemon-area");
      
      $btn.on("click", function() {
          $pokeArea.empty();
          let names_images = [];
          $.getJSON(`${base_URL}/pokemon/?limit=1000`)
            .then(element_info => {
                let random_pokemon_URLS = [];
                for (let i = 0; i < 3; i++) {
                    let random_index = Math.floor(Math.random() * element_info.results.length);
                    let url = element_info.results.splice(random_index, 1)[0].url;
                    random_pokemon_URLS.push(url);
                }
                return Promise.all(random_pokemon_URLS.map(url => $.getJSON(url)));
            })
            .then(pokemon_data => {
                names_images = pokemon_data.map(p => ({
                    name: p.name,
                    imgSrc: p.sprites.front_default
                }));
            return Promise.all(pokemon_data.map(p => $.getJSON(p.species.url)));
            })
            .then(speciesData => {
                speciesData.forEach((d, i) => {
                    let description_object = d.flavor_text_entries.find(function(entry) {
                        return entry.language.name === "en";
                    });
                    let description = description_object ? description_object.flavor_text : "";
                    let { name, imgSrc } = names_images[i];
                    $pokeArea.append(makePokeCard(name, imgSrc, description));
                });
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
}); //end function brace