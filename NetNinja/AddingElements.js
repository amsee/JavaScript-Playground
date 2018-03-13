// todo: JS-37 --- ADDING ELEMENTS TO THE DOM

// * create element in JavaScript
// * take element from JavaScript and push it into HTML

var newLi = document.createElement("li");
newLi
// <li></li
var newA = document.createElement("a");
newA
// <a></a>
var menu = document.getElementById("main-nav").getElementsByTagName("ul")[0]
menu
// <ul>..</ul>
menu.appendChild(newLi);
// <li></li>
newLi.appendChild()(newA);
// <a></a>
newA.innerHTML = "Blog";
// "Blog"
menu.insertBefore(newLi, menu.getElementsByTagName("li")[0]);
// <li>...</li>