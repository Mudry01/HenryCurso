"use strict";

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0
  const digitos = num.toString().split('').map(Number); // Convierte el numero en string, lo convierte en array y luego convierte cada string en un número.
  const longitud = digitos.length; // Guardamos la longitud del numero en una variable.
  let decimal = 0; // Declaramos una varible vacia.
  for (let i = 0; i < longitud; i++) { 
    decimal = decimal + digitos[longitud - 1 - i] * Math.pow(2, i); // A digitos a cada elemento le restamos - 1 - i para que vaya recorriendo de derecha a izquierda y luego potenciamos cada elemento en i.
  }
  return decimal; // Retornamos.
}
/* FUNCION MAS OPTIMA
function BinarioADecimal(num){
  let sum = 0;
  let newArray = num.split("").reverse();
  for(let i = 0; i < newArray.length; i++){
    sum = sum + newArray[i] * 2 ** i;
  }
  return sum;
}
 /*/

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1
  let newArr =[]; // Declaramos un nuevo array.
  while(num > 1){
    newArr.push(num % 2); // Pusheamos los elementos del array y devolvemos los restos.
    num = Math.trunc(num/2); // Truncamos para eliminar las fracciones.
  }
  newArr.push(1);
  let numBinario = newArr.reverse().join(''); // Revertimos el array y los juntamos todo.
  return numBinario; // Retornamos.
} 
/*  ALTERNATIVA MAS OPTIMA
  function DecimalABinario(num){
    while(num >= 1){
      let res = math.trunc(num % 2):
      num = num /2;
      binario.unshift(rest)
    }
  return binario.join('')
  }
*/

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
