var myForm = document.forms.myForm;
var message = document.getElementById("message");

myForm.onsubmit = function(){

    if(myForm.name.value == ""){
        message.innterHTML = "please enter a name";
        return false;
    } else{
        message.innerHTML = "";
        return true;
    }
};