'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length === 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)]; // Generamos un numero random para que sea el pivote.
  let izq = []; // Declaramos un array donde van a ir los elementos a izq.
  let der = []; // Declaramos un array donde van a ir los elementos a der.
  let equal = []; // Declaramos un array donde van a ir el elemento que sea igual.

  for (let i = 0; i < array.length; i++) { // Iniciamos un bucle for
    if (array[i] < pivot) izq.push(array[i]); // Si el elemento del array es menor al pivote, se pushea en el izq
    else if (array[i] > pivot) der.push(array[i]); // Sino si es mayor, se pushea al lado der
    else equal.push(array[i]); // En caso de que sea igual, lo pushea en equal. (Tambien podemos declarar >= o <= para mandarlo directamente lado der o izq)
  }
  return quickSort(izq).concat(equal).concat(quickSort(der)); // Concatemos los array y hacemos recursion.
};

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let div = dividir(array);
  let izq = div[0];
  let der = div[1];

  return merge(mergeSort(izq), mergeSort(der));
  //okey probemos ahora
}

function dividir(array) {
  let medio = Math.floor(array.length/2);
  let izq = array.slice( 0, medio) // Quiero que partas desde el comienzo hasta el medio.
  let der = array.slice( medio); // Desde el medio hacia el final.

  return [izq, der];
}

function merge(izq, der) {
  let indiceIzq = 0;
  let indiceDer = 0;

  let array = [];

  while ( indiceIzq < izq.length && indiceDer < der.length) {
    if (izq[indiceIzq] < der[indiceDer]) {
      array.push(izq[indiceIzq]);
      indiceIzq++
    } else {
      array.push(der[indiceDer]);
      indiceDer++
    }
  }

  return array.concat(izq.slice(indiceIzq)).concat(der.slice(indiceDer));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
