const blue = {
    name: "Blue",
    breed: 'Scottish Fold',
    dance: function(dance) {
        console.log("This is: ");
        console.log(this);
        console.log(`Meow, I am a ${this.breed} and I like to ${dance}`);
    },
    play : function(...toys) {
        for(let toy of toys) {
            console.log(`${this.name} plays with ${toy}`);
        }
    },
    greet() {
        console.log(`${this.name} says meow!`);
        alert(`${this.name} says meow!`);
    }
};

document.querySelector('#btn-1').addEventListener('click', blue.greet.bind(blue));

const btnA = document.querySelector("#a");
const btnB = document.querySelector("#b");
const btnC = document.querySelector("#c");
const btnD = document.querySelector("#d");
const btnE = document.querySelector('#e');
const btnF = document.querySelector('#f');
function popUp(msg) {
    alert("Secret message is " + msg);
}

btnA.addEventListener('click', function() {
   popUp('BUTTON A SAYS HI!'); 
});

btnB.addEventListener('click', function () {
   popUp('BUTTON B SAYS HI!'); 
});

btnC.addEventListener('click', function(){
   popUp('BUTTON C SAYS HI!'); 
});

btnD.addEventListener('click', popUp.bind(null, "Button D says hi"));
btnE.addEventListener('click', popUp.bind(null, "Button E says Hi!"));
btnF.addEventListener('click', popUp.bind(null, "Button F says hi!"));


const greeter = {
    msg: 'I like Chickenz',
    sayHi: () => {
        alert(this.msg);
    },
    waitAndGreet: function(delay) {
        setTimeout(()=>{
            alert(this.msg);   
        }, delay);
    }
};
greeter.sayHi();
greeter.waitAndGreet(4000);
