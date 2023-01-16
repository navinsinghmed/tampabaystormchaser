document.addEventListener("DOMContentLoaded", function() {
   let todoForm1 = document.getElementById("newTodoForm1");
   let todoList1 = document.getElementById("todoList_Navin"); 
   
   todoForm1.addEventListener("submit", function(e) {
        e.preventDefault();
        let removeButton = document.createElement('button');
        removeButton.innerText = 'X';
        
        let newTodo = document.createElement('li');
        newTodo.innerText = document.getElementById("task1").value;
        todoList1.appendChild(newTodo);
        newTodo.appendChild(removeButton);
        todoForm1.reset();      
   });
   
   todoList1.addEventListener('click', function(event_In_List) {
      const targetTagToLowerCase = event_In_List.target.tagName.toLowerCase();
      if(targetTagToLowerCase === "li") {
            event_In_List.target.style.textDecoration = "line-through";        
      } else if(targetTagToLowerCase === 'button') {
            event_In_List.target.parentNode.remove();
      }
   });
   
});
  