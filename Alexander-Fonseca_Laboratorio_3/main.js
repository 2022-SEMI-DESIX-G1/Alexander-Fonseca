var a = document.getElementById('formulario');
a.onsubmit = (event) => {
event.preventDefault();
const numero = parseInt(document.getElementById('numero').value);
const binario = numero.toString(2);
 

 function esPalindromodoble(num, bin){
   
     const entero = String(num);
     var n = entero.split("").reverse().join("");
     const binary = String(bin);
     var b = binary.split("").reverse().join("");
 
     var verificar = Boolean;

     if(n == num && b == bin){
        verificar = true;
     }
     else {
        verificar = false;
     }
     return verificar;
     
 }
 if(esPalindromodoble(numero,binario) == true){
    resultado.innerHTML += `<span <tr><td>${numero} y su binario ${binario} es palíndromo de doble base</td></tr></span>`;
 }
 else{
    resultado.innerHTML += `<span <tr><td>${numero} y su binario ${binario} no es palíndromo de doble base</td></tr></span>`;
 }



}