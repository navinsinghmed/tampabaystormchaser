document.getElementById("container");
document.querySelector("#container");

document.getElementsByClassName("second");
document.querySelectorAll(".second");

document.querySelector("ol .third");

let containerText = document.querySelector("#container");
containerText.innerText = "Hello";

let footerClass = document.querySelector(".footer");
footerClass.classList.add("main");
footerClass.classList.remove("main");

let newLi = document.createElement("li");
newLi.innerText = "four";

let list = document.querySelector("ul");
list.appendChild(newLi);

let li_of_OrderedList = document.querySelectorAll("ol li");
for(let i = 0; i < li_of_OrderedList.length; i++) {
    li_of_OrderedList[i].style.backgroundColor = "green";
}

let footer = document.querySelector(".footer");
footer.remove();
