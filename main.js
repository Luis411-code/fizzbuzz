function generar{
    let valor = document.getElementById('name');
    let numero = parseInt(valor);
    console.log(numero)

    if (isNaN (numero) || numero < 1) {
        console.error("Error");
        return;
    }
    console.log("Número Válido", numero);

    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz");
        }if (i % 3 === 0) {
            console.log("Fizz");
        } if (i % 5 === 0) {
            console.log("Buzz");
        }else{
            console.log(i);
        } 
        
    }
}