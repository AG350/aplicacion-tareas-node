const fs = require('fs');

function leerArchivoJSON() {
    if (fs.existsSync('./tareas.json')) {
        const tareasJson = fs.readFileSync('./tareas.json', 'utf-8');
        return JSON.parse(tareasJson);
    }

    return [];
}

function escribirArchivoJSON(tareas) {
    let tareasJson = JSON.stringify(tareas, null, ' ');
    fs.writeFileSync('./tareas.json', tareasJson);
}

module.exports = { 
    modificarEstado(indice,nuevoEstado) {
        let tareas = leerArchivoJSON();
        console.log(indice,nuevoEstado);
        
        if ((indice >= 0 && indice < tareas.length) && (nuevoEstado == "p" || nuevoEstado == "f")) {
            switch (nuevoEstado) {
                case 'p':
                    tareas[indice].estado = 'en progreso';
                    break;
                case 'f':
                    tareas[indice].estado = 'finalizada';
                    break;
                default:
                    break;
            }
                        
            escribirArchivoJSON(tareas);
            
            console.log('¡se cambio el estado de la tarea '+ tareas[indice].titulo+ ' !')
    
        } else {
            console.log('Verifica el indice ingresado, o el estado (p = en progreso, f=finalizada)');
        }
    }
    ,listarPorEstado(estado) {
        let tareasFiltradas = leerArchivoJSON().filter(elem => elem.estado == estado);
        tareasFiltradas.forEach(tarea => {
            console.log(tarea.indice + '-' + tarea.titulo, '(' +  tarea.estado + ')');
        });
    },
    listar() {
        let tareas = leerArchivoJSON();
        
        tareas.forEach(tarea => {
            console.log(tarea.indice + '-' +tarea.titulo + ' '+ tarea.descripcion + ' (' +  tarea.estado + ') ' + tarea.fecha);
        });
    },
    crear(titulo = '', descripcion = '', estado = 'pendiente') {

        if (titulo.length > 5) {
    
            let tareas = leerArchivoJSON();
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let siguiente = tareas.length + 1;
    
            let tareaNueva = {
                indice : siguiente,
                titulo: titulo,
                descripcion: descripcion,
                estado: estado,
                fecha: day+'/'+month+'/'+year
            }
            
            tareas.push(tareaNueva);
            
            escribirArchivoJSON(tareas);
            
            console.log('¡Tarea creada con éxito!')
    
        } else {
            console.log('Debes ingresar un título y debe tener al menos 5 caracteres');
        }
    
    }
}