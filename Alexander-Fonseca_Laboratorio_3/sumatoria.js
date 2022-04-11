const formulario = document.getElementById('formulario');
var a = document.getElementById('formulario');
a.onsubmit = (event) => {
event.preventDefault();
const numero = parseInt(document.getElementById('numero').value);

function sumatoria(n){
    var s = 0; 
	for (var i=0; i<=n; i++) {
        if( s[i] % 2 != 0){
            s = s + i; 
        }
        
		
	}
	return s; 

}
    resultado.innerHTML += `<span <div> ${sumatoria(numero)}</div> </span>`;


}