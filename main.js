
function generar(){
    let valor = document.getElementById('numero').value;
    let numero = parseInt(valor);
    let html = "";


    if (isNaN(numero) || numero < 1){
        console.error("Error escribe un número por favor");
        return;
    }
    console.log("Número Válido", numero);
    
    for (let i = 1; i <= numero; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            html += "<p>Fizzbuzz</p>";
            console.log("Fizzbuzz");
        }else if (i % 3 === 0) {
            console.log("Fizz");
            html += "<p>Fizz</p>";
        }else if (i % 5 === 0) {
            console.log("Buzz");
            html += "<p>Buzz</p>";
        }else{
            console.log(i);
            html += "<p>" + i + "</p>";
        } 
        
    }
    document.getElementById("lista").innerHTML = html;
}