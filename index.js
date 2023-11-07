function toTal() {
    let toTal = parseInt(prompt("ingresar el monto total de su compra"));
    alert("La cantidad es = " + toTal);
    return toTal

}
console.log(toTal);

function validarCuotas() {
    let cuotas = parseInt(prompt("Ingrese el número de cuotas (de 1 a 6):"));

    while (true) {
        if (cuotas >= 1 && cuotas <= 6) {
            alert("Número de cuotas válido: " + cuotas);
            break;
        } else {
            alert("Número de cuotas inválido. Debe ser un número entre 1 y 6.");
            cuotas = parseInt(prompt("Ingrese el número de cuotas (de 1 a 6):"));

        }
    }
    return cuotas;
}
console.log(validarCuotas)

let moNto = toTal();
let cuotas1 = validarCuotas();


alert("La cantidad es: " + moNto);
alert("Las cuotas son:" + cuotas1);
console.log(moNto);
console.log(cuotas1);


function dividirMonto(valor1, valor2) {
    let resultado = valor1 / valor2;
    return resultado;
}

let division = dividirMonto(moNto, cuotas1);

alert("Usted debe pagar " + cuotas1 + " cuotas de " + division);
console.log(division);

let nueVa = prompt("Ingrese  ESC para salir");

if (nueVa == "ESC") {
    alert("Genial! ha finalizado su compra");
} else {
    alert("ERROR.Intenta todo de nuevo!");
}