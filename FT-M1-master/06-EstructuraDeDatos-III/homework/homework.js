'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
};

BinarySearchTree.prototype.insert = function (value) {
   // Si el valor es mayor va hacia a la derecha.
   if (value > this.value){
      if (this.right === null) { // Evaluamos si el nodo se encuentra vacío 
         this.right = new BinarySearchTree(value); // Si se encuentra un nodo hacemos recursion para agrandar el arbol. 
      } else {
         this.right.insert(value); // Si no se encuentra ningun nodo se inserta.
      }
   }
   // Si el valor es menor va hacia la izquierda.
   if (value <= this.value){ // Si el valor es menor o igual
      if(this.left === null) { // Evaluamos si hay un espacio vacío
         this.left = new BinarySearchTree(value); // Si ya hay un valor, hacemos recursion.
      } else {
         this.left.insert(value); // Si el nodo se encuentra vacío lo insertamos.
      }
   }
};

BinarySearchTree.prototype.size = function() {
   // Case A ambas ramas tienen algo
   if (this.right !== null && this.left !== null) return 1 +  this.left.size() + this.right.size(); // Si los valores son distintos a null retornamos 1 + el tamaño de cada lado de los nodos.
   // Case B si la rama derecha tiene un valor y la izquierda esta vacía.
   if (this.right !== null && this.left === null) return 1 + this.right.size();
   // Case C la rama izquierda tiene un valor y la derecha esta vacía.
   if (this.left !== null && this.right === null) return 1 + this.left.size();
   //Case D ambas ramas estan vacío.
   if(this.right === null && this.left === null) return 1;
}

BinarySearchTree.prototype.contains = function (value) {
   // Si lo encuentro retorna true
   if (this.value === value) return true;
   // Si no lo encuentro y es mayor
   if (value > this.value){ 
      if (this.right === null) return false; // Si el nodo de la derecha esta vacio retorn true
      return this.right.contains(value); // Sino hago la recursion y pasa al siguiente nodo a la derecha.
   }
   // Si no lo encuentro y es menor.
   if (value < this.value){ // Si el valor que busco es menor
      if ( this.left === null) return false; // Si el valor esta vacío retorna false.
      return this.left.contains(value); // Sinoo hago la recursion y paso al siguiente a la izquierda.
   } 
};

/* Modo alterno
return this.right. === null ?false : this.right.contains(value);
*/

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
   switch (order) {
      // En el caso "pre-order", primero se llama al callback en el nodo actual, luego se realiza la recursión en el nodo izquierdo y luego en el nodo derecho.
      case "pre-order":
         cb(this.value); // Llamada al callback en el nodo actual
         this.left && this.left.depthFirstForEach(cb, order); // Recursión en el nodo izquierdo (si existe)
         this.right && this.right.depthFirstForEach(cb, order); // Recursión en el nodo derecho (si existe)
         break;

      // En el caso "post-order", primero se realiza la recursión en el nodo izquierdo, luego en el nodo derecho y finalmente se llama al callback en el nodo actual.
      case "post-order":
         this.left && this.left.depthFirstForEach(cb, order); // Recursión en el nodo izquierdo (si existe)
         this.right && this.right.depthFirstForEach(cb, order); // Recursión en el nodo derecho (si existe)
         cb(this.value); // Llamada al callback en el nodo actual
         break;

      // En el caso por defecto (in-order), primero se realiza la recursión en el nodo izquierdo, luego se llama al callback en el nodo actual y finalmente se realiza la recursión en el nodo derecho.
      default:
         this.left && this.left.depthFirstForEach(cb, order); // Recursión en el nodo izquierdo (si existe)
         cb(this.value); // Llamada al callback en el nodo actual
         this.right && this.right.depthFirstForEach(cb, order); // Recursión en el nodo derecho (si existe)
         break;
   }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, almacen = []){
   cb(this.value);

   if (this.left !== null) {
      almacen.push(this.left);
   }
   if (this.right){
      almacen.push(this.right);
   }
   if (almacen.length > 0) {
      almacen.shift().breadthFirstForEach(cb, almacen);
   }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
