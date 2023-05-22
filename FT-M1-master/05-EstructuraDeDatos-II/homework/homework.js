'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() { // Tren
  this.head = null; // Locomotora 
}

function Node(value) { // Vagon
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  let newNode = new Node(value);
  let current = this.head;

  if (!current){ // Si la lista esta vacía.
    this.head = newNode; // Creamos un nuevo nodo.
    return value; // Retornamos el nuevo valor.
  } else { // En caso de que ya tenga un elemento de la lista.
    while (current.next){ // Mientras que el ultimo elemento de la lista este vacío osea sea Null.
      current = current.next;
    }
    current.next = newNode; // El ultimo se inicializa en un nodo nuevo.
  }
  return value; // Retornamos el valor.
};

LinkedList.prototype.remove = function () {
  let current = this.head;

  if (!current) return null; // La lista esta vacia.

  if (!current.next) { // La lista tiene un solo nodo.
    let aux = current.value;
    this.head = null;
    return aux;
  }

  while (current.next.next) { // La lista tiene varios nodos.
    current = current.next;
  }
  let aux = current.next.value; // Guardamos el dato del nodo.
  current.next = null; // Borramos el nodo.
  return aux; // Retornamos el valor del nodo eliminado.
};

LinkedList.prototype.search = function (dato) {
  let current = this.head;

  if(!current) return false; // Si no hay nada en la lista retorna false;

  if (typeof dato === "function") { // Si el tipo de dato es una funcion.
    while(current) { // Mientras tenga un nodo
      if(dato(current.value)) return current.value; // Si la funcion es la buscada, que retorne el valor.
      else current = current.next; // Sino que siga buscando en el siguiente.
    }
    return null;
  } else { // Sino
    while(current) { // Mientras tenga un valor
      if(current.value === dato) return dato; // Si ese valor es identico al valor buscado, que me retorne el dato.
      else current = current.next; // Sino, que siga por el siguiente.
    }
    return null;
  }
};

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

function hash(key){
  // Sumo el codigo numerico de caracter => todo esto en un acumulador.
  // Total % numBuckets => Mi resultado final que es la posicion del Array donde se inserta el objeto.
}

HashTable.prototype.hash = function (key) {
  let suma = 0; // Variable para almacenar la suma de los códigos de caracteres

  // Iterar sobre cada carácter de la clave
  for (let char of key) {
    suma += char.charCodeAt(); // Sumar el código ASCII del carácter a la suma
  }
  // Aplicar el módulo para obtener el índice hash dentro del rango de cubetas
  return suma % this.numBuckets;
};

HashTable.prototype.set = function (key, value) {
  let index = this.hash(key); // Calcula el índice hash para la clave

  if (!this.buckets[index]) { // Verifica si la cubeta correspondiente está vacía
    this.buckets[index] = { [key]: value }; // Crea un nuevo objeto en la cubeta con la clave y el valor
  } else {
    this.buckets[index][key] = value; // Agrega o actualiza la clave y el valor en el objeto existente de la cubeta
  }
};

HashTable.prototype.get = function (key) {
  let index = this.hash(key); // Calcula el índice hash para la clave
  return this.buckets[index][key]; // Devuelve el valor asociado a la clave en la cubeta correspondiente
};

HashTable.prototype.hasKey = function (key) {
  let index = this.hash(key); // Calcula el índice hash para la clave
  if (this.buckets[index][key]) return true; // Verifica si la clave existe en la cubeta correspondiente y retorna true.
  else return false; // Sino retorna false;

  // Tambien se puede hacer con el get
  // !!this.get(key); // doble !! convierte en un boolean. 
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
