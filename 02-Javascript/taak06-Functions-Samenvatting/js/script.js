var score = 0;
var getal1 = document.querySelector(".getal1").innerHTML;
var getal2 = document.querySelector(".getal2").innerHTML;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}

showRandomNumber1()

function showRandomNumber2(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

showRandomNumber2()

function scoreplus() {
    document.querySelector(".score").innerHTML = score + 1;
}



function geefAntwoord(input) {
    if (input == "hoger") {
        if (getal1 < getal2) {
        console.log("geen punt")
            
        } else {
            
        }
    } else {
        console.log("wel  punt")
        scoreplus()
        }

 }

