function countDown(time) {
    let timer = setInterval(function(){
        if(time <= 0) {
            clearInterval(timer);
            console.log('Done!');
        }
        else {
            console.log(time);
        }
        time--;
    },1000);   
 }
 countDown(4);
 
 function randomGame() {
     let randomNumber;
     let counter = 0;
     let numberTimer = setInterval(function(){
         randomNumber = Math.random();
         counter++;
         if(randomNumber > 0.75) {
             clearInterval(numberTimer);
             console.log("It took " + counter + " try/tries.");
         }
     },1000);
    }

setTimeout(randomGame,5000);




console.log("Hurricane Warning");
let hurricane = "Hurricane Ian";
let hurricaneSpeed = hurricane + " 165 mph";
console.log(hurricaneSpeed);
 
 let maxVelocity2022Storms = [140, 140, 116, 165, 154, 145];
 
 let msgMaxSpeed = `Maximum Windspeeds 2022 are ${maxVelocity2022Storms}`;
 console.log(msgMaxSpeed);
 
 for(let velocity of maxVelocity2022Storms) {
     console.log(velocity);
 }
 
 let hurricaneString = "Hurricane 165 mph";
 let arr1 = [];
 for(let char of hurricaneString) {
     arr1 += char;
 }
 console.log(`Array: ${arr1}`);
 
 const hurricaneStrongest = {
     name: "Hurricane Ian",
     maxVelocity: 165,
     category: 5
 }
 
 
 for(let property in hurricaneStrongest) {
    console.log(`${property} --> ${hurricaneStrongest[property]}`);    
 } 
 
 function repeat(num, func) {
     for(let i = 0; i < num; i++) {
         func();
     }
 }
 
 function hurricaneStatement() {
        console.log("Hurricane Warning Tampa Bay!");   
 }
 
 repeat(3,hurricaneStatement);
 
 