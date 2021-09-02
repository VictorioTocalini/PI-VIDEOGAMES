const { Router } = require('express');
const router = Router();
const axios = require('axios');
require('dotenv').config();
const{KEY} = process.env;
const {Genre} = require('../db');

router.get('/genres', async function(_req,res,next){
    try{
        const DBgenres = await Genre.findAll()
        const aux = []
        if(DBgenres.length<1){
            const apiGenres= await axios.get('https://api.rawg.io/api/genres?key=' + KEY)
            apiGenres.data.results.forEach(async (g) => {
               const obj= {
                   ID: g.id,
                   name: g.name
               }
                aux.push(obj)
                await Genre.create(obj)   
            });
            res.send(aux)
        } else res.send(DBgenres)
    }catch(err){
        next(err)
    }
})

module.exports = router