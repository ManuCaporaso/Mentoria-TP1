// FUNCIONES
const comparar = require('./funciones/compara') 
const mayorA = require('./funciones/mayorA') 
const esPar = require('./funciones/esPar') 
const numeroDeficiente = require('./funciones/numeroDeficiente'); 



//EJERCICIO 1 - COMPARA ENTRE NUMEROS
let valor1 = 3;
let valor2 = 2;
//EJERCICIO 2 - MAYOR O IGUAL A 90 'TRUE' SINO 'FALSE'
let num1 = 90
//EJERCICIO 3 - SI ES O NO PAR
let num2 = 11
//EJERCICIO 4 - NUMERO DEFICIENTE
let num3 = 36

const resultado1 = comparar (valor1, valor2);
const resultado2 = mayorA (num1);
const resultado3 = esPar (num2);
const resultado4 = numeroDeficiente (num3);


//RESULTADO
console.log('EJERCICIO 1',resultado1)
console.log('EJERCICIO 2',resultado2)
console.log('EJERCICIO 3',resultado3)
console.log('EJERCICIO 4',resultado4)

