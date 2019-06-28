
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require("yargs").options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarlatLng(argv.direccion)
//      .then( console.log);

// clima.getClima(-33.459999, -70.639999)
//     .then(console.log)
//     .catch(console.log);

//console.log(argv.direccion);

const getInfo = async (direccion) =>{

    try{
        const coords = await lugar.getLugarlatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima es ${coords.direccion} es de ${temp}`;
    }catch(e){
        return `No se pudo determinar el clima de ${direccion}`;

    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

