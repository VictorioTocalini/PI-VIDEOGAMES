const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const{KEY} = process.env
const {Videogame} = require('../db')

router.get('/videogames/q', async function(req, res, next){
    try{
        const {name} = req.query
        const rta= []
        const apiGames = [];
        const videoDb = await Videogame.findAll()
        for(let i= 1; i<4; i++){
            const videoApi = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${KEY}&page=${i}` );
            videoApi.data.results.forEach((g)=> apiGames.push(g));
        }
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
        videoDb.forEach(e=>{
            if(e.name.includes(name)){
                rta.unshift(e)
            }
        })
        const slice= rta.slice(0,15)
        res.send(slice)
    }catch(err){
        next(err)
    }
})


module.exports = router