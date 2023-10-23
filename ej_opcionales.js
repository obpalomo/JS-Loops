/*
EJERCICIO 7: (OPCIONALES)
Completa los datos de la tabla en index.html utilizando los valores del siguiente mapa.
*/
let toysMap = new Map();
let newToysArray = new Array();
let toy1 = 	{id: 23, name: 'Barbie Man'}; // 15
let toy2 = {id: 40, name: 'El gato con Guantes'}; // 8
let toy3 = {id: 40, name: 'El gato felix'}; // 35
toysMap.set(toy1, 15);
toysMap.set(toy2, 8);
toysMap.set(toy3, 35);
let rowAcolA = 'algo'; // extraer de mi mapa el parametro A del juguete uno.
let rowAcolB = 'algo';
let rowAcolC = 'algo';
let rowBcolA = 'algo'; // extraer de mi mapa el parametro A del juguete uno.
let rowBcolB = 'algo';
let rowBcolC = 'algo';
let rowCcolA = 'algo'; // extraer de mi mapa el parametro A del juguete uno.
let rowCcolB = 'algo';
let rowCcolC = 'algo';

/*
EJERCICIO 8: FIBONACCI (OPCIONALES)
La sucesión de fibonacci consiste en una serie de numeros los cuales cada uno es la suma de los dos anteriores, de la siguiente manera:
[0, 1, 1, 2, 3, 5, 8, 13, 21...]
https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci

Se pide:

- Crear un codigo que almacene en un array los n primeros números de la sucesion (n se definirá como let n = algo).
- Definir con palabras (o pseudocodigo) como vamos a afrontar la solución del problema (que requsitos tiene nuestro programa y como queremos resolverlos).
        /* -Declarar las posiciones 1 y 2 del array
        -Recorres un array hasta 15 posiciones
        -Crear una lógica de la suma fibonacci
        -Impular numeros al array */

- Implementar esa estrategia utilizando código.
- testear usando los valores para n: 8, 15, 16. (imprimir el resultado con console.log);

*/

let n = 15;
let fibonacci = new Array();

fibonacci[0] = 0;
fibonacci[1] = 1;

for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci [i - 1];
    fibonacci.push(fibonacci[i]);
    fibonacci.pop();
}
console.log(fibonacci);


