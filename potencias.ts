import * as rls from 'readline-sync';

function calcPotencia(base: number, exponente: number): number {
  if (exponente === 0) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = 1; i <= exponente; i++) {
      resultado *= base;
    }
    return resultado;
  }
}

const base = rls.questionInt('Ingrese la base: ');
const exponente = rls.questionInt('Ingrese el exponente (mayor o igual a cero): ');

if (exponente < 0) {
  console.log('El exponente debe ser mayor o igual a cero.');
} else {
  const potencia = calcPotencia(base, exponente);
  console.log(`El resultado de ${base} elevado a ${exponente} es: ${potencia}`);
}