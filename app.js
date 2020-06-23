const tareas = require('./tareas');

let accion = process.argv[2];
let parametros = process.argv.slice(3);

switch (accion) {
    case undefined:
    case 'l':
    case 'listar':
        tareas.listar();
        break;

    case 'c':
    case 'crear':
        tareas.crear(parametros[0], parametros[1]);
        break;
    
    case 'le':
    case 'estados':
        tareas.listarPorEstado(parametros[0]);
        break;
    case 'ce':
    case 'cambiar':
        tareas.modificarEstado(parametros[0]-1,parametros[1]);
        break;
    default:
        console.log();
        console.log('No entiendo esa acción');
}
