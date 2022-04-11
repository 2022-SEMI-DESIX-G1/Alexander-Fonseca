var a = document.getElementById('formulario');
a.onsubmit = (event) => {
event.preventDefault();
const palabra = document.getElementById('palabra').value;

function caracter(c){
   var x = String(c);
   var y = x.split("");

   for(var i=0;i<y.length;i++){
     var n = y[i].length;
     console.log(y[i]+"="+n);
   }
//    console.log(y.length);
}

caracter(palabra);
}