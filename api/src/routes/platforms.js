const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const{KEY} = process.env


router.get('/platforms', async function(_req, res, next){
    try{
        const videoApi = await axios.get(`https://api.rawg.io/api/games?key=` + KEY );
        const apiGames = videoApi.data.results;
        const rta=[];
        apiGames.forEach((game)=>{
            game.platforms.forEach((p)=>{
                const name= p.platform.name
                if(!rta.includes(name)){
                    rta.push(name)
                }  
                })
        })
        res.send(rta)

    }catch(err){
        next(err)
    }
})

module.exports = router