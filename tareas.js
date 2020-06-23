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
    listarPorEstado(estado) {
        let tareasFiltradas = leerArchivoJSON().filter(elem => elem.estado == estado);
        tareasFiltradas.forEach(tarea => {
            console.log(tarea.titulo, '(' +  tarea.estado + ')');
        });
    },listar() {
        let tareas = leerArchivoJSON();
        
        tareas.forEach(tarea => {
            console.log(tarea.titulo + ' '+ tarea.descripcion + ' (' +  tarea.estado + ')');
        });
    },
    crear(titulo = '', descripcion = '', estado = 'pendiente') {

        if (titulo.length > 5) {
    
            let tareas = leerArchivoJSON();
    
            let tareaNueva = {
                titulo: titulo,
                descripcion: descripcion,
                estado: estado
            }
            
            tareas.push(tareaNueva);
            
            escribirArchivoJSON(tareas);
            
            console.log('¡Tarea creada con éxito!')
    
        } else {
            console.log('Debes ingresar un título y debe tener al menos 5 caracteres');
        }
    
    }
}