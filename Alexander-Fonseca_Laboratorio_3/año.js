const formulario = document.getElementById('formulario');
var a = document.getElementById('formulario');
a.onsubmit = (event) => {
event.preventDefault();
const year = parseInt(document.getElementById('numero').value);

function añoBisiesto(año){
    var verificar = Boolean
    if (año % 4 == 0 && año % 100 != 0  || año % 400 == 0){
        verificar = true;
    }
    else{
        verificar = false;
    }
    return verificar;
}
console.log(añoBisiesto(year));
if(añoBisiesto(year)==true){
    resultado.innerHTML += `<span <div> ${year} es bisiesto </div> </span>`;
}
else{
    resultado.innerHTML += `<span <div> ${year} no es bisiesto </div> </span>`;
}
}