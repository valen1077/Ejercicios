"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
function esMultiplo(num, div) {
    return num % div === 0;
}
var num = rls.questionInt('Ingrese el numero: ');
var div = rls.questionInt('Ingrese el divisor: ');
if (esMultiplo(num, div)) {
    console.log("".concat(num, " es m\u00FAltiplo de ").concat(div, "."));
}
else {
    console.log("".concat(num, " no es m\u00FAltiplo de ").concat(div, "."));
}
