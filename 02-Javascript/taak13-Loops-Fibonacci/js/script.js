
var getal1 = 0;
var getal2 = 1;
var getal3 = 1;

for ( i = 0; i < 100; i++) {
     getal3 = getal1+getal2;
     getal1 = getal2;
     getal2 = getal3;
     console.log(getal3);
}

