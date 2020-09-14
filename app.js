const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//clave API google direccion : AIzaSyBmo3dIx0QbFtpju-QdrvUv9Uw8iMx-ylc
const argv = require('yargs').options({
    direccion:{
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand:true
    }

}).argv;

// const cordenada = lugar.getlugar_Lt_Long(argv.direccion)
//
//     cordenada.then(console.log)

// clima.getclima(4.730555555,-74.263888888 )
//     .then(console.log)
//     .catch(console.log)

//tarea exitosa!!!
// const getinfo = async (direccion)=>{
//
//    const resp = await (lugar.getlugar_Lt_Long(direccion))
//     const lat = resp.lat
//     const long = resp.long
// const clim =await clima.getclima(lat,long)
//
// let resf = console.log(`el clima de ${direccion} es de ${clim}°C`)
//
//     return resf
// }
// getinfo(argv.direccion).then().catch(e=>{
//     let a = console.log(`no se encontro clima para ${argv.direccion}`)
//     return a
// })

const getinfo = async (direccion)=>{
    try{
        const corden = await lugar.getlugar_Lt_Long(direccion)
        const temp = await clima.getclima(corden.lat , corden.long);
        return `el clima de ${corden.direccion} es de ${temp}°C`
    }catch (e) {
        return `no se pudo determinar el clima de ${corden.direccion}.`
    }

}

getinfo(argv.direccion).then(console.log).catch(console.log)