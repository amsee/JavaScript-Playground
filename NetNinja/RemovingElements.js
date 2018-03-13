// todo: JS-38 --- REMOVING ELEMENTS FROM THE DOM

var parent = document.getElementById("main-nav").getElementsByTagName("ul")[0];
parent 
var child = parent.getElementsByTagName("li")
child

// * store element that we removed in a variable
var removed = parent.removeChild(child);
// * re-insert
parent.appendChild(removed);

