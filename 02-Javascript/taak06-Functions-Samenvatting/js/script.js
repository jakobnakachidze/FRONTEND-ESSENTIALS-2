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
        document.body.style.backgroundColor = "red";
        document.querySelector(".score").innerHTML = score;
        score = score - 1;
        getal1 = showRandomNumber1()
        getal2 = showRandomNumber2()
        } else {
            document.body.style.backgroundColor = "green"; //goed 2
            console.log("punt gescored");
            score = score + 1;
            document.querySelector(".score").innerHTML = score;
            getal1 = showRandomNumber1();
            getal2 = showRandomNumber2();
        }
    } 
    if (input == "lager"){
        if(getal1 > getal2){
            console.log("punt NIET gescored");
            document.body.style.backgroundColor = "red"; //niet goed  
            score = score - 1;
            document.querySelector(".score").innerHTML = score;
            getal1 = showRandomNumber1();
            getal2 = showRandomNumber2();
        } else{
            document.body.style.backgroundColor = "green";
            console.log("punt gescored");
            score = score + 1;
            console.log(score);
            document.querySelector(".score").innerHTML = score;
            getal1 = showRandomNumber1();
            getal2 = showRandomNumber2();
            // goed
            
            
        }
    }
}  
 

