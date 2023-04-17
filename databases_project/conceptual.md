### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
    PostgreSQL is an open source, powerful object-relational database system that uses and extends SQL Language by combining it with features that scale and store large complicated data workloads.
    
- What is the difference between SQL and PostgreSQL?
    SQL is a commercial entity, while postgreSQL is open source and free with availability to everyone. PostgreSQL extends SQL capabilities and combines it with many features used in scaling/storing large complex data workloads. 
    
- In `psql`, how do you connect to a database?
    \c NAME_OF_DATABASE 
- What is the difference between `HAVING` and `WHERE`?
    'HAVING' must be accompanied by 'GROUP BY' statement in order to filter records by group that adhere to a conditional statement. 'WHERE' filters records from tables and does not require a 'GROUP BY' entity clause. 
    
- What is the difference between an `INNER` and `OUTER` join?
'INNER' uses values in common to join tables, while OUTER uses values not common to join tables.

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
LEFT OUTER- combines everything from first table with non-shared items of second table. Right outer- combines unique non-shared elements of first table with all records on the second table.

- What is an ORM? What do they do?
Object Relational Mapping; wrapper library using relational SQL commands, makes programming more simple, also integrates with python.

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
    AJAX uses javascript but doesn't reload a page. HTTP reloads the page as if the browser is submitting a page.

- What is CSRF? What is the purpose of the CSRF token?
Cross-Site Request Forgery- unauthorized access to a web application usually from an external source that has nothing to do with the app. A CSRF token requires that the source of a request be only from an intended or specified application. 

- What is the purpose of `form.hidden_tag()`?
It is used to generate hidden form field that then secretly sends info with a form submission, checks to make sure source of the request is your form/page, ex. CSRF token.