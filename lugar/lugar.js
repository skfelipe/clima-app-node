//https://www.npmjs.com/package/axios
const axios = require("axios");

const getLugarlatLng = async (dir) =>{
    const encodeUlr = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUlr }`,
        headers: {'X-RapidAPI-Key': '1e6a9f59c7msh79f82c272309766p1adb43jsn63a94890c452'}
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
       //return resp.data;
    return {
        direccion: direccion,
        lat: lat,
        lng: lng
    }

}


module.exports ={
    getLugarlatLng
}

