document.addEventListener("DOMContentLoaded", function() {
   
   let formHurricane = document.querySelector('#Hurricane_Info_Form_ID');
   
   formHurricane.addEventListener('submit', function(event_submitted) {
        
        event_submitted.preventDefault();
        
        const Hurricane_Input_URL = document.querySelector('#Hurricane_URL_Input_ID').value;
        const Hurricane_Name = document.querySelector('#Hurricane_Name_ID').value;
        const Hurricane_Category = document.querySelector('#Hurricane_Category_ID').value;
        formHurricane.reset();
        
        let Hurricane_Image_Div = document.createElement('div');
        Hurricane_Image_Div.classList.add('Hurricane_Image_Container');
        
        document.querySelector('body').append(Hurricane_Image_Div);
        
        let Hurricane_Image_Tag = document.createElement('img');
        Hurricane_Image_Tag.setAttribute('src', Hurricane_Input_URL);
        Hurricane_Image_Tag.setAttribute('alt', "This is the URL of the Hurricane Image You Entered");
        Hurricane_Image_Tag.classList.add('Hurricane_Image_Class');
        Hurricane_Image_Div.append(Hurricane_Image_Tag);
        
        let Hurricane_Name_Tag = document.createElement('div');
        Hurricane_Name_Tag.classList.add("label_text", "name_text");
        Hurricane_Name_Tag.innerText = Hurricane_Name;
        Hurricane_Image_Div.append(Hurricane_Name_Tag);
 
        let Hurricane_Category_Tag = document.createElement('div');
        Hurricane_Category_Tag.classList.add("label_text", "category_text");
        Hurricane_Category_Tag.innerText = Hurricane_Category;
        Hurricane_Image_Div.append(Hurricane_Category_Tag); 
        
        Hurricane_Image_Div.addEventListener('click', function(image_was_clicked) {
           
           let delete_button = document.createElement('button');
           delete_button.innerText = "Click to Delete Image";
           delete_button.classList.add("delete_button_class");
           Hurricane_Image_Div.append(delete_button);
           delete_button.addEventListener('click', function(delete_was_clicked) {
              delete_button.parentElement.remove();
               
           });
            
        });      
         
   });
    
});
