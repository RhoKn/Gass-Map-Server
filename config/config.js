const config = {
    production: {
        'port': process.env.PORT || 5000,
        'localdbURL' : 'mongodb://gas-mapp-production-db:pr0duct10n_dB@ds039145.mlab.com:39145/gass-mapp-server-db',
        'startingProcessMSJ' : 'Iniciando conexión con base de datos',
        'startedProcessMSJ' : 'Conexión realizada',
        'secretKey' : 'pry---Movilesydk83y038J'
    },
    dev: {
        'port' :3000,
        'localdbURL' : 'mongodb://localhost:27017/gassMap',
        'startingProcessMSJ' : 'Iniciando conexión con base de datos',
        'startedProcessMSJ' : 'Conexión realizada',
        'secretKey' : 'pry---Movilesydk83y038J'
    }
};

exports.get = function get(env) {
    return config[env] || config.dev;
};
