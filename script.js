function escribirPantalla(valor){

    const pantalla = document.getElementById('pantalla');
    const valorAnterior = pantalla.innerText;
    
    if(valorAnterior == "0"){
        pantalla.innerText = "";
    }

    pantalla.innerText += valor;
}

function eliminarTexto(){
    const pantalla = document.getElementById('pantalla');
    pantalla.innerText = "0";

}

function resolverOperación(){
    const pantalla = document.getElementById('pantalla');
    let operación = pantalla.innerHTML;
    operación = operación.replace(/x/g, '*');
    operación = operación.replace(/÷/g, '/');
    let resultado = Function(`return (${operación})`)();;

    eliminarTexto();

    escribirPantalla(resultado);

}

