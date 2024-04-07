const entregarMonto = function (monto) {
    const billetes = [1000, 500, 100, 50, 10, 5, 1];
    let indice = 0;
    let saldo = monto;
    let cantidad_billetes = 0;
    const billetes_utilizados = [];

    while (saldo > 0 && indice < billetes.length) {
        if (billetes[indice] <= saldo) {
            saldo = saldo - billetes[indice];
            cantidad_billetes = cantidad_billetes + 1;
            billetes_utilizados.push(billetes[indice]);
        } else {
            indice = indice + 1;
        }
    }

    if(saldo === 0) {
        console.log(`El cajero devolvio todo el monto con ${cantidad_billetes} billetes: ${billetes_utilizados}`);
        return cantidad_billetes;
    }
    console.log(billetes_utilizados)
    console.log('No hay solucion');
    return -1;
}

console.log(entregarMonto(4757))