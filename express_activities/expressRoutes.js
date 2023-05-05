const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hurricane Home Page!")
})

app.get('/hurricanes', (req, res) => {
   console.log("Hurricane page") 
   console.log(req)
   res.send("<h1>Hurricane Warning Tampa Bay</h1>")
});

app.get('/cyclone', (req, res) => {
  res.send("Hurricane Get that Cyclone! Hurricane warning- Get Request!")
})

const greetings = {
    en: "hello",
    fr: "bonjour",
    ic: "hallo",
    ja: "konnichiwa"
}

app.get("/greet/:language", (req, res) => {
    const lang = req.params.language;
    const greeting = greetings[lang];
    if (!greeting) return res.send("invalid language!");
    res.send(greeting.toUpperCase());
})

app.post('cyclone', function createCyclone(req, res) {
  res.send("You created a new cyclone! Post Request")  
})

app.get('/show-me-headers', (req, res) => {
    console.log(req.rawHeaders)
    console.log(req.headers)
    res.send(req.headers)
})

app.get('/show-language', (req, res) => {
  const lang = req.headers['accept-language']
  res.send(`Your language preference is: ${lang}`)
})

app.get('/search', (req, res) => {
    const {term = 'hurricane warning', sort = '2023'} = req.query;
    return res.send(`Search Page! Term is: ${term}, sort is ${sort}`)
})

app.post('/register', (req, res) => {
  res.send(req.body);
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
});