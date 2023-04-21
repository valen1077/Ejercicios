import * as rls from 'readline-sync';

function esMultiplo(num: number, div: number): boolean {
  return num % div === 0;
}

const num = rls.questionInt('Ingrese el numero: ');
const div = rls.questionInt('Ingrese el divisor: ');

if (esMultiplo(num, div)) {
  console.log(`${num} es múltiplo de ${div}.`);
} else {
  console.log(`${num} no es múltiplo de ${div}.`);
}