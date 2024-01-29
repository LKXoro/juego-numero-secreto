let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maxIntentos = 3;
limpiarCaja();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario==numeroSecreto){
        //el usuario acertó
        asignarTextoElemento("p",`¡Felicidades! Acertaste el número secreto en ${intentos} ${(intentos==1) ? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //el usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p",`El número secreto es menor`);
        } else {
            asignarTextoElemento("p",`El número secreto es mayor`);
        }
        intentos++;
        if(intentos>maxIntentos){
            asignarTextoElemento("p",`Lo siento, llegaste al número máximo de ${maxIntentos} intentos, el número secreto era: ${numeroSecreto}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            document.getElementById("intentar").setAttribute("disabled","true");
        }
        limpiarCaja();
    }
    return;
    console.log(numeroDeUsuario);
}

function limpiarCaja(){
    document.getElementById("valorUsuario").value = "";
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p",`Ya se sortearon todos los números posibles, vuelve a cargar la página para iniciar nuevamente`);
        document.getElementById("intentar").setAttribute("disabled","true");
    } else {
    //Si el número generado está incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Elige un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled","true");
    document.getElementById("intentar").removeAttribute("disabled");
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de número
    //Generar el número alaeatorio
    //Inicializar el número de intentos
    //Deshabilitar botón de nuevo juego
    condicionesIniciales();
}

condicionesIniciales();