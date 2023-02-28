//does not work here in node.js! Only works on the 
//console web page; navigate to web page
//then enter code in console
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    for(let planet of data.results) {
        console.log(planet.name);
    }
    const nextUrl = data.next;
    const secondReq = new XMLHttpRequest();
    secondReq.addEventListener('load', function(){
       console.log("Success!");
       const data = JSON.parse(this.responseText);
       for(let planet of data.results) {
           console.log(planet.name);
       } 
    });
    secondReq.addEventListener('error', function() {
       console.log("ERROR!"); 
    });
    secondReq.open('GET', nextUrl);
    secondReq.send();
    console.log("Just sent second request...");
});
firstReq.addEventListener('error', () => {
    console.log('ERROR!!!!'); 
});
firstReq.open('GET', "https://swapi.dev/api/planets");
firstReq.send();
console.log("Sending Request...");