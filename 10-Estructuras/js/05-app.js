// TODO: switch para evaluar multiples condiciones de valores

const metodoPago = 'efectivo';
// por cada case se ejecuta el codigo.
switch (metodoPago) {
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    case 'transferencia':
        console.log('Pagaste con transferencia');
        break;
    default: // * el default es obligatorio
        console.log('El metodo de pago no es valido');
}
