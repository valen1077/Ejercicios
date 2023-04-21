"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function calcPotencia(base, exponente) {
    if (exponente === 0) {
        return 1;
    }
    else {
        var resultado = 1;
        for (var i = 1; i <= exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }
}
var base = rls.questionInt('Ingrese la base: ');
var exponente = rls.questionInt('Ingrese el exponente (mayor o igual a cero): ');
if (exponente < 0) {
    console.log('El exponente debe ser mayor o igual a cero.');
}
else {
    var potencia = calcPotencia(base, exponente);
    console.log("El resultado de ".concat(base, " elevado a ").concat(exponente, " es: ").concat(potencia));
}
