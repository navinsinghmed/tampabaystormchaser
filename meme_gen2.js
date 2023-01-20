document.addEventListener("DOMContentLoaded", function() {
   
   let form = document.querySelector('#meme_form_id');
   
   form.addEventListener('submit', function(event) {
        event.preventDefault();
         
        const imageFileInput_URL = document.querySelector("#imageFileInput_url_id").value;
        const topTextInput = document.querySelector("#topTextInput").value;
        const bottomTextInput = document.querySelector("#bottomTextInput").value;
        form.reset();   
           
        let memeDiv = document.createElement('div');
        memeDiv.classList.add('meme-container');
        
        document.querySelector('body').append(memeDiv);

        
        let image_tag = document.createElement('img');
        image_tag.setAttribute('src', imageFileInput_URL);
        image_tag.setAttribute('alt', "This is the URL of the meme image you entered");
        image_tag.classList.add('memeImage');
        memeDiv.append(image_tag);
        
        let topTextTag = document.createElement('div');
        topTextTag.classList.add("memeText", "memeTopText");
        topTextTag.innerText = topTextInput;
        memeDiv.append(topTextTag);

        
        let bottomTextTag = document.createElement('div');
        bottomTextTag.classList.add("memeText", "memeBottomText");
        bottomTextTag.innerText = bottomTextInput;
        memeDiv.append(bottomTextTag);
        
        memeDiv.addEventListener('click', function(meme_was_clicked) {
           let delete_button = document.createElement('button');
           delete_button.innerText = "Click to Delete";
           delete_button.classList.add("delete_button_class");
           memeDiv.append(delete_button);
           delete_button.addEventListener('click', function(delete_was_clicked) {
              delete_button.parentElement.remove(); 
           }); 
        }); 
        
   });
   
   

    
});