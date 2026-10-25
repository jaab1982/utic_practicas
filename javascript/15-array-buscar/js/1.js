/* Funciones */

'use strict'

var lenguajes = ["Javascript", "Java", "PHP", "C++", "Python"];

var resultBuscar = lenguajes.find(lenguajes => lenguajes == "Java");
console.log(resultBuscar);
var resulBuscarIndex = lenguajes.findIndex(lenguajes => lenguajes == "PHP");
console.log(resulBuscarIndex);
var numeros = [10, 30, 50, 80, 90, 100, 30];
var resultBuscarSome = numeros.some(numeros => numeros >= 30);
console.log(resultBuscarSome);