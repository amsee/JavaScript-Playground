// todo: JS-35 --- ACCESSING AND CHANGING ATTRIBUTES

// * properties when using assignment characters =

innterHTML = ""

// * method when using parenthesis ()

innterHTML()

var link = document.getElementById("test");
link

// * use method
link.getAttribute()
<"/Subjects"
link.getAttribute("class");
<"ninja"
link.getAttribute("class", "pie");
<undefined
link.setAttribute("alt", "hello");
<undefined

link.className;
<"pie"
link.className = "ninja";
<"ninja"

// * the behaviour of these properties are not always the same as the method

link.href;
< "fully qualified URL"