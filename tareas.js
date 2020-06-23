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