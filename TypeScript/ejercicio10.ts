/**
 * EJERCICIO 10 - Sistema de Usuarios
 * Crea un type Usuario con: id, nombre, edad, activo.
 * Crea un arreglo tipado de usuarios.
 * Crea funciones para agregar, buscar por id y filtrar usuarios activos.
 * Muestra el arreglo final.
 */

type Usuario = {
    id: number;
    nombre: string;
    edad: number;
    activo: boolean;
};

const usuarios: Usuario[] = [
    { id: 1, nombre: "Ana", edad: 25, activo: true },
    { id: 2, nombre: "Luis", edad: 30, activo: false }
];

function agregarUsuario(nuevoUsuario: Usuario): void {
    usuarios.push(nuevoUsuario);
}

function buscarUsuarioPorId(id: number): Usuario | undefined {
    return usuarios.find(usuario => usuario.id === id);
}

function mostrarUsuariosActivos(): Usuario[] {
    return usuarios.filter(usuario => usuario.activo);
}

agregarUsuario({ id: 3, nombre: "Carlos", edad: 28, activo: true });

console.log("Usuario con id 2:", buscarUsuarioPorId(2));
console.log("Usuarios activos:", mostrarUsuariosActivos());
console.log("Arreglo final de usuarios:", usuarios);

export {};
