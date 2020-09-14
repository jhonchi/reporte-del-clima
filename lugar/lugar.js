const axios = require('axios');

//encodeURI para traducir palabras con espacios para la url
//console.log(encodedURL);
//instancia necesaria por los headers
const getlugar_Lt_Long = async (dir)=>{

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodedURL}`,
        //  baseURL: `url${encodedURL}`,
        //timeout: 1000,
        headers: ({
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
            , "x-rapidapi-key": "e61b51a324msh57371f095755e5dp1ac340jsn54ad706370df"
            //, "useQueryString": true
        })
    });
    //lo que queremos que retorne la funcion

   const resp = await instance.get() //se llama a la promesa

    //construimos el error
    if (resp.data.data.length===0){
        throw new Error('no hay resultados para esta solicitud')
    }

    const datos = resp.data.data[0];
    const direccion = datos.name;
    const long = datos.longitude;
    const lat = datos.latitude;

    return{
        direccion,
        lat,
        long
    }
}


module.exports={
   getlugar_Lt_Long
}

// 978499b0b351fd25f77f427906c2d5c8  Default API openweather