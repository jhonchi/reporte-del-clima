const axios = require('axios');


const getclima = async (lat, lng)=>{

     const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=978499b0b351fd25f77f427906c2d5c8&units=metric`)

    return resp.data.main.temp;

}

module.exports={
    getclima
}