import * as rls from 'readline-sync';

function esMultiplo(num: number, divisor: number): boolean {
  return num % divisor === 0;
}

function cantidadDeDivisores(num: number): number {
  let cantidad = 0;
  for (let i = 1; i <= num; i++) {
    if (esMultiplo(num, i)) {
      cantidad++;
    }
  }
  return cantidad;
}

const num = rls.questionInt('Ingrese el numero: ');

const cantidad = cantidadDeDivisores(num);

console.log(`El numero ${num} tiene ${cantidad} divisores.`);