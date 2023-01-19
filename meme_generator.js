document.addEventListener("DOMContentLoaded", function() {
   
   const meme_Form_Completed = document.getElementById("meme_input_data");
   const gallery_of_Memes = document.querySelector(".meme_gallery_ul_class"); 
   
   
   meme_Form_Completed.addEventListener("submit", function(event) {
       event.preventDefault();
       
       let allMemes = document.createElement('li');
       allMemes.classList.add("image_of_meme");
       
       let topMemeText = document.getElementById("meme_text_top_input_id");
       let imageInput = document.getElementById("link_inputted_id").value,
       src = urlInput;
       img = document.createElement('img');
       img.src = src;
       
       let topMemeTextDiv = document.createElement('div');
       topMemeTextDiv.classList.add("text","top");
       topMemeTextDiv.innerText = document.getElementById("meme_text_top_input_id").value;
       
       let bottomMemeTextDiv = document.createElement('div');
       bottomMemeTextDiv.classList.add("text","bottom");
       bottomMemeTextDiv.innerText = document.getElementById("meme_text_bottom_input_id").value;
       
       let removeDiv = document.createElement('div');
       removeDiv.classList.add("red-x");
       removeDiv.innerText = "X";
       removeDiv.style.color = "red";
       
       gallery_of_Memes.appendChild(allMemes);
       allMemes.appendChild(img);
       allMemes.appendChild(topMemeTextDiv)
       allMemes.appendChild(bottomMemeTextDiv);
       allMemes.appendChild(removeDiv);
        
        meme_Form_Completed.reset();    

   });
   
   function remove(event) {
       event.target.parentNode.remove();
   }
   
   gallery_of_Memes.addEventListener('click', remove, false);
    
});