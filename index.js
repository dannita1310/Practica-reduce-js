const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const resultado = listaDeNumeros.reduce((acc, cv) => {
  return acc + cv;
}, 0);

console.log(resultado);
const numeros = [1, 2, 3, 4, 5];

const sumaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);

console.log("La suma total es:", sumaTotal);
