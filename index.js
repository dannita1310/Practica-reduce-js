const numeros = [1, 2, 3, 4, 5];

const sumaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);

console.log("La suma total es:", sumaTotal);
