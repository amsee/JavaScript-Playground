// todo: JS-19 --- Loops Practical Example
// * JavaScript is 0 based

var links = document.getElementsByTagName("a");

for (i = 0; i < links.length; i++)
{
    links[i].className = "link-" + i;
}