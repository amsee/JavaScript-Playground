// todo: JS-34 --- CHANGING CONTENT VIA THE 
// * 1. grab element that you want
// * 2. use method on element you want to change text content or html

var myBody = document.getElementsByTagName("body");
myBody
myBody[0].innerHTML; //? return the whole html content within the body tag

myBody[0].innerHTML = "<p>I am a paragraph tag</p>";
<"<p>I am a paragraph tag</p>"
// ? only changes the text and not the html tags

var myTitle = document.getElementById("page-title")
myTitle
myTitle.textContent;
<"Kung Fu Your Net Skills!"
myTitle.textContent = "Yo Ninjas, get ready to learn!";
<"Yo Ninjas, get ready to learn!"

