let hurricaneWind = 165;
let hurricaneWind_2017= 142;
let deltaV = hurricaneWind-hurricaneWind_2017;
//deltaV shows how much stronger 2022's peak hurricane wind was 
//compared to 2017's peak hurricane wind.
let firstTropicalSystem2022 = "Tropical Storm Alex";
let firstHurricane2022 = "Hurricane Ian";
let secondHurricane2022 = "Hurricane Nicole";
let all2022StormsFlorida = " " + firstTropicalSystem2022 + " " + firstHurricane2022 + " " + secondHurricane2022;
console.log("delta V is " + deltaV);
console.log("all 2022 florida storms :" + all2022StormsFlorida);

let stormOne = "hurricane";
let stormTwo = stormOne.replace("hurricane", "major hurricane");
console.log(stormOne);
console.log(stormTwo);

let newStorm = stormTwo.slice(0,5);
console.log(newStorm);
console.log(1+1);
console.log("hurricane warning");
