const formulario = document.getElementById('formulario');
var a = document.getElementById('formulario');
a.onsubmit = (event) => {
    event.preventDefault();
    var numero = parseInt(document.getElementById('numero').value);
    var f= [];
    f[0] = 0;
    f[1] = 1;
    if (numero>0){
        
    
    for(var i = 2; i< numero;i++){
        f[i] = f[i-1] + f[i-2];
    }

    for(var i = 0; i <numero;i++){
        const resultado = document.createElement("button");
        const texto = document.createTextNode(`${f[i]}`);
        resultado.appendChild(texto);
        resultado.onclick = prueba;
        var tarjetas = document.getElementById("tarjetas");
        tarjetas.appendChild(resultado);
        function prueba(){
            var eliminar = confirm('¿Quieres eliminar esta tarjeta?');
            if(eliminar == true){
                resultado.style.display = "none";
                alert("Se ha eliminado");
            }
            else{
                resultado.style.display = "block";
    
            }  
        }
        
       
    }
}
else{
    alert("El número no puede ser negativo");
    location.reload();
}
    
    console.log(f);
} 