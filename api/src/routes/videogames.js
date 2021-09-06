const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const{KEY} = process.env
const {Videogame} = require('../db')

router.get('/videogames', async function(_req, res, next){
    try{
    
        const rta = []
        const videoDb = await Videogame.findAll()
        const videoApi = await axios.get(`https://api.rawg.io/api/games?key=` + KEY );
        const apiGames = videoApi.data.results;
        apiGames.sort(function(a,b){
            if( a.name < b.name ) {return -1};
            if( a.name > b.name ) {return 1 };
            return 0
        })
        apiGames.forEach((v) => {
            const obj= {
                ID: v.id,
                name: v.name,
                image: v.background_image,
                rating: v.rating,
                genres:  v.genres
            }
            rta.push(obj)
        })
        videoDb.forEach(e=> rta.unshift(e))
        res.send(rta)
    }catch(err){
        next(err)
    }
})

module.exports = router