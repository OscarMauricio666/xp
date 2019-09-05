function leer() {
    var tex = document.getElementById('texto').value;

    tex = tex.replace(/[ ]+/g, " ");
    tex = tex.replace(/^ /, "");
    tex = tex.replace(/\r?\n/g, " ");
    tex = tex.replace(/ $/, "");


    texDiv = tex.split(" ");
    numPalabras = texDiv.length;
    alert("Número de palabras " + numPalabras);

}

function numCarac() {
    var tex2 = document.getElementById('texto').value;
    tex2 = tex2.replace(/[ ]+/g, " ");
    tex2 = tex2.replace(/^ /, "");
    tex2 = tex2.replace(/\r?\n/g, " ");
    tex2 = tex2.replace(/ $/, "");
    tex2 = tex2.replace(/ /g, "");
    numcarc = tex2.length;
    alert("número de caracteres " + numcarc);
}

function cuentaVL() {
    var tex3 = document.getElementById('texto').value;
    var contador1 = 0;
    var contador2 = 0;
    var consonantes = 0;

    for (var y = 0; y < tex3.length; y++) {
        if (y == (/[ ]+/g, " ") || y == (/^ /, "") || y == (/\r?\n/g, " ") || y == (/ $/, "") ||
            y == (/ /g, "")) {
            contador1 = contador1 + 0;
        } else {
            contador1++;
        }

    }
    for (var y = 0; y < tex3.length; y++) {
        if (tex3.charAt(y) == "a" || tex3.charAt(y) == "e" || tex3.charAt(y) == "i" || tex3.charAt(y) == "o" || tex3.charAt(y) == "u") {
            contador2++;
        }

    }
    consonantes = contador1 - contador2;
    alert("número de Consonantes " + consonantes + " Número de vocales " + contador2);

}




function sololetras(e) {
    tecla = e.keyCode || l.which;
    teclado = String.fromCharCode(tecla).toLocaleLowerCase();
    letras = ".,;:-()'$%&?¿¡!abcdefghijklmnñopqrstuvwxyzáéíóú ";
    especiales = "8-32-37-38-46-164";

    teclado_especial = false;

    for (var i in especiales) {
        if (tecla == especiales[i]) {

            teclado_especial = true;
            break;
        }
    }
    if (letras.indexOf(teclado) == -1 && !teclado_especial) {
        return false;
    }

}

module.exports = leer;
module.exports = numCarac;
module.exports = cuentaVL;
module.exports = sololetras;
/* Desarrollar una aplicación web que recibe un texto y cuente
#Vocales
#Constantes
#Palabras
#Palabras mas usadas
#Describa la metodologia
*/

/*
Prueba  1:  no recibir numeros o carcateres especiales, y espacios en blanco no deben ser contados
prueba  2 : una vocal no puede ser una palabara , y una consonante tampoco hsdjasdhj ajhsjdhsajd jhashjd haj d ajh shshs  comer o beber 
*/