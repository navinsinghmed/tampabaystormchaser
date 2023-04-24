$(function() {
    let base_URL = 'https://deckofcardsapi.com/api/deck'
    
    $.getJSON(`${base_URL}/new/draw/`).then(element_info => {
        let { suit, value } = element_info.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    });
    
    let first_card = null;
    $.getJSON(`${base_URL}/new/draw/`)
      .then(element_info => {
          first_card = element_info.cards[0];
          let deck_ID = element_info.deck_id;
          return $.getJSON(`${base_URL}/${deck_ID}/draw/`);
      })
      .then(element_info => {
          let second_card = element_info.cards[0];
          [first_card, second_card].forEach(function(card) {
            console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`); 
          });
      });
      
      let deck_ID = null;
      let $btn = $('button');
      let $cardArea = $('#card-area');
      
      $.getJSON(`${base_URL}/new/shuffle/`).then(element_info => {
        deck_ID = element_info.deck_id;
        $btn.show(); 
      });
      
      $btn.on("click", function() {
          $.getJSON(`${base_URL}/${deck_ID}/draw/`).then(element_info => {
            let card_image_source = element_info.cards[0].image
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $cardArea.append(
                $('<img>', {
                    src: card_image_source,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                })
            );
            if (element_info.remaining === 0) $btn.remove(); 
          });
      });
});
