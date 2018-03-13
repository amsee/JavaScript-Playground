// todo: JS-39 --- INTRODUCTION TO JAVASCRIPT EVENTS

// * JavaScript Events
alert("hey");

var title = document.getElementById("page-title");
title.onclick = function(){
    alert("you clicked me");
};
function(){
    alert("you clicked me");
}
title.onmousover = function(){
    alert("you hovered your mouse over me")
};