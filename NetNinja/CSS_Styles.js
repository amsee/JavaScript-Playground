// todo: JS-36 --- CHANGING CSS STYLES

var title = document.getElementById("page-title");
// undefined
title.setAttribute("style", "position: relative;");
// undefined
title.setAttribute("style", "left: 10px;");
// undefined
title.style.left = "20px";
// "20px"
title.style.top = "10px";
// "10px"
title.style.color = "red";
// "red"
title.style.background-color = "blue" // * css style
// ReferenceError
title.style.backgroundColor = "blue"
// "blue"



