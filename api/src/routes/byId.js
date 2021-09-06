const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const{KEY} = process.env
const {Videogame, Genre} = require('../db')
const isUUID= require('validator/lib/isUUID');

router.get('/videogame/:id', async function(req,res,next){
    try{
        const {id} = req.params;
        if(isUUID(id,[4])) {
            const videoDb = await Videogame.findOne({where: {ID : id}})
            if(videoDb){
                const obj={
                    ID: videoDb.ID,
                    name: videoDb.name,
                    image: videoDb.image,
                    rating: videoDb.rating,
                    genres:  videoDb.genres,
                    description: videoDb.description,
                    released: videoDb.release_date,
                    platforms: videoDb.platforms
                }
                res.send(obj)
            } else res.status(400).send('no find db')
        } else{
            const videoApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${KEY}` );
            const apiGames = videoApi.data;
            if(apiGames){
                const obj={
                    ID: apiGames.id,
                    name: apiGames.name,
                    image: apiGames.background_image,
                    rating: apiGames.rating,
                    genres:  apiGames.genres,
                    description: apiGames.description,
                    released: apiGames.released,
                    platforms: apiGames.platforms
                }
                res.send(obj)
            }else res.status(400).send('no find api')
        }   
    }catch(err){
        next(err)
    }
})

module.exports = router