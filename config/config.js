const config = {
    production: {
        'port' :3000,
        'localdbURL' : 'mongodb://localhost:27017/movilproyect',
        'mlab':'mongodb://admin:hola1234@ds151612.mlab.com:51612/proyectoitp',
        'startingProcessMSJ' : 'Iniciando conexión con base de datos',
        'startedProcessMSJ' : 'Conexión realizada',
        'secretKey' : 'pry---Movilesydk83y038J'
    },
    dev: {
        'port' :3000,
        'localdbURL' : 'mongodb://localhost:27017/movilproyect',
        'mlab':'mongodb://admin:hola1234@ds151612.mlab.com:51612/proyectoitp',
        'startingProcessMSJ' : 'Iniciando conexión con base de datos',
        'startedProcessMSJ' : 'Conexión realizada',
        'secretKey' : 'pry---Movilesydk83y038J'
    }
};

exports.get = function get(env) {
    return config[env] || config.dev;
};