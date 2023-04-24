$(function(){
    let base_URL = 'https:/deckofcardsapi.com/api/deck';
    
    $.getJSON(`${base_URL}/new/draw/`, function(element_info) {
      let { suit, value } = element_info.cards[0];
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }); 
    
    $.getJSON(`${base_URL}/new/draw/`, function(element_info) {
        let first_Card = element_info.cards[0];
        let deck_ID = element_info.deck_id;
        $.getJSON(`${base_URL}/${deck_ID}/draw/`, function(element_info) {
           let second_Card = element_info.cards[0];
           [first_Card, second_Card].forEach(function(card) {
               console.log(
                   `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
               );
           }); 
        });
    });
    
    let deck_ID = null;
    let $btn = $('button');
    let $cardArea = $('#card-area');
    
    $.getJSON(`${base_URL}/new/shuffle/`, function(element_info) {
       deck_ID = element_info.deck_id;
       $btn.show(); 
    });
    
    $btn.on('click', function() {
        $.getJSON(`${base_URL}/${deck_ID}/draw/`, function(element_info) {
          let cardSrc = element_info.cards[0].image;
          let angle = Math.random() * 90 - 45;
          let randomX = Math.random() * 40 - 20;
          let randomY = Math.random() * 40 - 20;
          $cardArea.append(
              $('<img>', {
                  src: cardSrc,
                  css: {
                      transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                  }
              })
          );
          if (element_info.remaining === 0) $btn.remove(); 
        });
    });
});