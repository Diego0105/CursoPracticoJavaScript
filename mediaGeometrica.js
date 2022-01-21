


function calculaMediaGeometrica(lista) {
    multiplicación = lista.reduce ( function (valorAcumulado, nuevoValor){
        return valorAcumulado * nuevoValor
    });
    return multiplicación**(1/lista.length)
};