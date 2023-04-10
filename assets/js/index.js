console.log('Sesion web1');

function changeGretting() {
    // TODO obtener nombre cliente
    const clientName = getNameOfClient();

    // TODO obtener referencia de label h1
    const grettingReference = getReferenceOfIdGretting();

    
    //TODO cambiar el saludo
    grettingReference.innerHTML = 'Hola ' + clientName;
}

function getNameOfClient() {
    const clientName = prompt('Escribe tu nombre');
    return clientName;
}

function getReferenceOfIdGretting(){
    return document.getElementById('gretting');
}