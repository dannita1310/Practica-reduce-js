const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const resultado = listaDeNumeros.reduce((acc, cv) => {
  return acc + cv;
}, 0);

console.log(resultado);
