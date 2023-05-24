### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
Json Web Token- encodes info in secret key, allowing use in many applications, readability, and validability. A user logs in once and can access many applications with only one login. JWT string has 3 portions: header, payload, signature. 

- What is the signature portion of the JWT?  What does it do?
Signature is for validating, the server validates that the request source is equal to the signature the server expects, utilizing the secret key. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, since the information encoded can be decoded by JWT decoder.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
JWT is created by the server and stored to the client, whenever a user signs in. When the user makes additional requests, the JWT is included, which enables the server to recognize the credentials of the user, and therby validate that these credentials came from the original server. The user therefore does not have to re-login, since this authentication allows the user access to many other parts of the applications.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests- test smallest parts of the program, testing and evaluating individual methods and functions. Integration tests- test multiple portions of the program in terms of functionality, and ensures the pieces of the program properly interact to product the output desired or expected. End-to-end tests investigate user experience, from the beginning to the end, for a specific multistep task which accounts for the functionality of the app. 

- What is a mock? What are some things you would mock?
Mock- imitates inputs from sources externet to unit, imitates components that are being tested. This allows a programmer to test functions that are in the program's scope, and you can mock test API responses, and Math.random().

- What is continuous integration?
Continuous integration involves merging smaller updates more frequently with consistency, instead of making or editing an entirely new version of the application.

- What is an environment variable and what are they used for?
An environment variable is a variable that accounts for an application's context, and it specifies the mode (development/production) and other paramaters/resources external to the scope of the application. 

- What is TDD? What are some benefits and drawbacks?
Test Driven Development- writing tests in the beginnning while making applications, and gradually creating code to make the tests pass and verify. TDD allows for concise code, with functions separated efficiently, and enables refactoring when necessary.

- What is the value of using JSONSchema for validation?
JSONSchema catches harmful or bad data before it can access the database and does so with concise code.

- What are some ways to decide which code to test?
Go for functions, test the functions depending on the most important ones needed in an application, and where the main logic is. Test API routes, authentication, validation as the most important pieces.

- What does `RETURNING` do in SQL? When would you use it?
It makes SQL output a value, revealing information about the query run and the data altered.

- What are some differences between Web Sockets and HTTP?
Web sockets work in both directions, have states, and stay connected in order to allow timely updates. HTTP is stateless, and nothing is saved after sending information. HTTP connections close immediately after the response is received, and the information goes in one direction each time- such as one request to the server, and then one request received. 

- Did you prefer using Flask over Express? Why or why not (there is no right answer here --- we want to see how you think about technology)?
Express was easier to understand, especially since I was able to link it to my javascript knowledge better, and testing is easier with Jest. The virtual environments were more confusing for me in flask.
