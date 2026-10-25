/* Variables. */
// 'use strict' // el lenguaje es mas sensible
// variables de tipo cadena
var pais = "<h1>paraguay</h1>";
var continente = '<h1>' + 'America' + '</h1>';
// concatenar
var p_c = pais + ' ' + continente;

console.log(p_c);

document.write(pais + "<hr>");
document.write(continente);
// Modo estricto
// 'use strict'
// let permite definir variables limitando su alcance
// var permite definir varibables y utilizarlas globalmente
let varlet = "esto es una variable let";
document.write("<br>" + varlet);
// Constantes: son varibales que no pueden cambiar de valor
// y se definnen con la palabra "const"
var web = "http://www.utic.edu.py";
const constweb = "http://www.utic.edu.py/cire";
constweb = "otra pagina"
console.log(web);
console.log(constweb);
