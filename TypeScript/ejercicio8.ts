/**
 * EJERCICIO 8 - Herencia
 * Crea una clase Persona con nombre y edad.
 * Crea una clase Estudiante que herede de Persona y agregue carrera.
 * Crea un estudiante e imprime toda su información.
 */

class Persona {

    constructor(
        public nombre: string,
        public edad: number
    ) { }

}

class Estudiante extends Persona {

    constructor(
        nombre: string,
        edad: number,
        public carrera: string
    ) {
        super(nombre, edad);
    }

}

const estudiante1 = new Estudiante("Laura", 20, "Ingeniería de Sistemas");
console.log(estudiante1);

export {};
