/**
 * EJERCICIO 6 - Enums
 * Crea un enum llamado EstadoPedido.
 * Debe contener: Pendiente, EnProceso, Enviado, Entregado.
 * Crea una variable utilizando el enum e imprime su valor.
 */

enum EstadoPedido {
    Pendiente,
    EnProceso,
    Enviado,
    Entregado
}

let miPedido: EstadoPedido = EstadoPedido.EnProceso;
console.log(miPedido);

export {};
