let strnaam


function alertbox() {
    alert ("ewa ziina");
}
alertbox()

function prompto() {
 strnaam = prompt("faaka wats je naam ezebaai ");
    
}
prompto()
console.log(strnaam)

var response = confirm("is "+strnaam+" je naam ?");
if (response == true) {
    alert("welkom op pagina")
} else {
    alert("dan niet")
}