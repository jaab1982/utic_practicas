// 3 - Tipos de datos
// numericos
var nro1 = 50;
var nro2 = 25;
// operadores
var suma = nro1 + nro2;
var resta = nro1 - nro2;
var multi = nro1 * nro2;
var divi = nro1 / nro2;
var porcentaje = nro1 % nro2;
var deciman = 24.5;
var verdadero = true;
var falso = false;

var texto = "El resultado de la operacion es: ";

document.write(texto, suma, "<br>");
document.write(texto, resta, "<br>");
document.write(texto, multi, "<br>");
document.write(texto, divi, "<br>");
document.write(texto, porcentaje, "<br>");
document.write(texto, suma, "<br>");
document.write(texto, deciman, "<br>");
document.write(texto, verdadero, "<br>");
document.write(texto, falso, "<br>");

// funciones para convertir datos
document.write("<hr>");
document.write("<h1>Funciones para convertir datos.</h1>");

var numero = '30';
document.write(numero, "<br>");
var tipoDatoStr = typeof(numero);
document.write(tipoDatoStr, "<br>")
var numero_convert = Number(numero);
document.write(numero_convert, "<br>");
var tipoDato = typeof(numero_convert);
document.write(tipoDato, "<br>");

// convertir numero a string
var numeroEntero = 40;
var convertToStr = String(numeroEntero);
document.write(convertToStr, "<br>");
var tipoDatoConvert = typeof(convertToStr);
document.write(tipoDatoConvert, "<br>");

// parseInt
var strNumber = '100';
var parseEntero = parseInt(strNumber);
document.write("el numero parseado es: ", parseEntero, "<br>");
var tipoDatoNroParseado = typeof(parseEntero);
document.write(tipoDatoNroParseado, "<br>");
console.log(typeof(parseEntero));