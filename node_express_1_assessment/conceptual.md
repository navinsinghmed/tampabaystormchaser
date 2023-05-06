### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callback functions allow management of asynchronous code in javascript. You can also use promises with .then() .catch() or async/await.
- What is a Promise?
A promise is an Object reserving a place for future value- the object can be pending/fulfilled/rejected status.
- What are the differences between an async function and a regular function?
Regular functions return data types or return nothing. Async functions return a promise object.
- What is the difference between Node.js and Express.js?
Node.js is a runtime environment for Javascript that executes Javacscript outside of the browser, and mainly involves back-end programming. Express.js is a framework incorporating Node.js concepts that allows one to build web applications (routing/responding/handling requests).
- What is the error-first callback pattern?
The first argument passed to the callback function is the error object in the error-first callback pattern. The result of this request is then passed as follow-up arguments.
- What is middleware?
Middleware is code that operates during the middle of a request/response cycle. Middleware accomplishes middle tasks including validating inputs, translating data values for backend work- parsing json- and routing of errors.
- What does the `next` function do?
Directs the program to send execution of functions to next route.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
In terms of structure, you can chain requests so as not to have to use await on multiple lines. In terms of name, variable values are promise objects as opposed to user data- name them as promise objects.

