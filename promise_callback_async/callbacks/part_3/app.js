$(function() {
   let base_URL = "https://pokeapi.co/api/v2";
   
   $.getJSON(`${base_URL}/pokemon/?limit=1000`, function(element_info) {
      console.log(element_info); 
   });
   
   $.getJSON(`${base_URL}/pokemon/?limit=1000`, function(element_info) {
       let random_pokemon_URLS = [];
       for (let i = 0; i < 3; i++) {
           let random_index = Math.floor(Math.random() * element_info.results.length);
           let url = element_info.results.splice(random_index, 1)[0].url;
           random_pokemon_URLS.push(url);
       }
       random_pokemon_URLS.forEach(function(url) {
           $.getJSON(url, function(element_info) {
               console.log(element_info);
           });
       });
   });
   
   $.getJSON(`${base_URL}/pokemon/?limit=1000`, function(element_info) {
      let random_pokemon_URLS = [];
      for (let i = 0; i < 3; i++) {
          let random_index = Math.floor(Math.random() * element_info.results.length);
          let url = element_info.results.splice(random_index, 1)[0].url;
          random_pokemon_URLS.push(url);
      } 
      random_pokemon_URLS.forEach(function(url) {
          $.getJSON(url, function(element_info) {
             let name = element_info.name;
             $.getJSON(element_info.species.url, function(element_info) {
               let descriptionObj = element_info.flavor_text_entries.find(
                   entry => entry.language.name === "en"
               );
               let description = descriptionObj
                 ? descriptionObj.flavor_text
                 : "no description available";
               console.log(`${name}: ${description}`);
             }); 
          });
      });
   }); 


let $btn = $("button");
let $pokeArea = $("#pokemon-area");

$btn.on("click", function() {
   $pokeArea.empty();
   $.getJSON(`${base_URL}/pokemon/?limit=1000`, function(element_info) {
       let random_pokemon_URLS = [];
       for (let i = 0; i < 3; i++) {
           let random_index = Math.floor(Math.random() * element_info.results.length);
           let url = element_info.results.splice(random_index, 1)[0].url;
           random_pokemon_URLS.push(url);
       }
       random_pokemon_URLS.forEach(function(url, x) {
           $.getJSON(url, function(element_info) {
               let name = element_info.name;
               let imgSrc = element_info.sprites.front_default;
               $.getJSON(element_info.species.url, function(element_info) {
                   let description_object = element_info.flavor_text_entries.find(
                       entry => entry.language.name == "en"
                   );
                   let description = description_object
                     ? description_object.flavor_text
                     : "no description available";
                     $pokeArea.append(makePokeCard(name, imgSrc, description));
               });
           });
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
});