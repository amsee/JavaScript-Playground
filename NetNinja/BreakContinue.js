// todo: JS-18 --- Break and Continue

for (i = 0; i < 10; i++) {

    if (i === 5 || i === 3){
        
        continue; //? keyword is similar to break ("skip out the code for this iteration of code")
        // ? weak form of break. don't print, just go back to the top3
    }

    console.log(i);

    if (i === 7){

        break;

    }

}

console.log("I have broken out of the loop");