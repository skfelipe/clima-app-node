

const axios = require("axios");

const getClima = async (lat, lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=755b312843f9b1b6272da4bb9e15a905&units=metric`);


    return resp.data.main.temp;

}


module.exports ={
    getClima
}
