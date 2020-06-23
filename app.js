const tareas = require('./tareas');

let accion = process.argv[2];
let parametros = process.argv.slice(3);

console.log(accion);

switch (accion) {
    case undefined:
    case 'l':
    case 'listar':
        tareas.listar();
        break;

    case 'c':
    case 'crear':
        tareas.crear(parametros[0], parametros[1])
        break;
    
    case 'le':
    case 'estados':
        tareas.listarPorEstado(parametros[0])
        break;
    default:
        console.log();
        console.log('No entiendo esa acción');
}
