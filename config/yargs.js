const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de una tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza el estado completada de una tarea', {
        descripcion: {
            alias: 'd',
            demand: true,
            desc: 'Descripción de una tarea por hacer'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            alias: 'd',
            desc: 'Elimina una tarea'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}