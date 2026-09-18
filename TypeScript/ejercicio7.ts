/**
 * EJERCICIO 7 - Clases
 * Crea una clase llamada Vehiculo.
 * Debe contener: marca, modelo.
 * Agrega un método mostrarInformacion() que imprima ambas propiedades.
 * Crea dos objetos utilizando la clase.
 */

class Vehiculo {

    constructor(
        public marca: string,
        public modelo: string
    ) { }

    mostrarInformacion(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
    }

}

const vehiculo1 = new Vehiculo("Toyota", "Corolla");
const vehiculo2 = new Vehiculo("Mazda", "3");

vehiculo1.mostrarInformacion();
vehiculo2.mostrarInformacion();

export {};
