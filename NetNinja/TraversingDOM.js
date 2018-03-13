// todo: JS-33 --- TRAVERSING THE DOM
// * Document is mother of all objects. Highest in the hierarchy tree.

// * enter type of class you want to grab in parenthesis
document.getElementsByClassName("content");

// * store array in content
var myContentDivs = document.getElementsByClassName("content");
var myContentDivs[1].getElementsByTagName("h2");
> myH2
> myH2[0].innerHTML = "YO NINJAS";
< "YO NINJAS"
document.getElementById("page-title"); //? getElement means get only one, not an array
< does not return an array (getElements)