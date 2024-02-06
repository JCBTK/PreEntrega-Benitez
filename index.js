window.onload = iniciar;

function iniciar(){
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular.addEventListener("click", clickBtnCalcular);
}
function clickBtnCalcular(){
    var sumatoria = 0;
    var contador = 0;
    var numeroElegido = document.getElementById("numeroElegido")
    var numero = numeroElegido.value 

    while(contador <= numero){
        sumatoria += contador;
        contador++;
    }
        
    alert("el resultado de la suma concatenada de todos los numeros hasta "+ numero + " es igual a " + sumatoria);

}

