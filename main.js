
function generar(){
    let valor = document.getElementById('numero').value;
    let numero = parseInt(valor);


    if (isNaN(numero) || numero < 1){
        console.error("Error");
        return;
    }
    console.log("Número Válido", numero);

    for (let i = 1; i <= numero; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        }else if (i % 3 === 0) {
            console.log("Fizz");
        }else if (i % 5 === 0) {
            console.log("Buzz");
        }else{
            console.log(i);
        } 
        
    }
}