const { argv } = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(colors.yellow(JSON.stringify(tarea)));
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======Por Hacer======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log('Se actualizó correctamente'.green);
        } else {
            console.log('No se ha encontrado la tarea'.red);
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Se borro la tarea correctamente'.green);
        } else {
            console.log('No se ha encontrado la tarea para borrar'.red);
        }
        break;

    default:
        console.log('El comando no es reconocido');
        break;
}