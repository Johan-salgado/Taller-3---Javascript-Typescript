/**
 * EJERCICIO 7 - Catálogo de Libros
 * Dado el siguiente arreglo:
 * Realiza las siguientes operaciones:
 *  - Encontrar el libro con id 2.
 *  - Obtener solo los libros disponibles.
 *  - Crear un arreglo únicamente con los títulos.
 */

const libros = [
    {
        id: 1,
        titulo: "JavaScript",
        disponible: true
    },
    {
        id: 2,
        titulo: "Python",
        disponible: false
    },
    {
        id: 3,
        titulo: "Java",
        disponible: true
    }
];

const libroConId2 = libros.find(libro => libro.id === 2);
const librosDisponibles = libros.filter(libro => libro.disponible);
const titulosLibros = libros.map(libro => libro.titulo);

console.log("Libro con id 2:", libroConId2);
console.log("Libros disponibles:", librosDisponibles);
console.log("Títulos de los libros:", titulosLibros);
