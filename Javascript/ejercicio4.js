/**
 * EJERCICIO 4 - Inventario de Estudiantes
 * Crea un objeto llamado estudiante. Debe contener:
 *  - nombre
 *  - edad
 *  - carrera
 *  - materias (array)
 * Posteriormente:
 *  - Cambia la edad.
 *  - Agrega una nueva materia.
 *  - Muestra todas las propiedades utilizando Object.entries() (Investigar).
 */

const estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Ingeniería",
    materias: [
        "Matemáticas",
        "Programación"
    ]
};

estudiante.edad = 21;
estudiante.materias.push("Bases de Datos");

console.log("Datos del estudiante:");
for (const [propiedad, valor] of Object.entries(estudiante)) {
    console.log(`${propiedad}:`, valor);
}
