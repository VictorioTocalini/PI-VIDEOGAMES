const { Router } = require('express');
const router = Router();
const {Videogame} = require('../db')
const validator = require('validator');

router.post('/addvideogame', async function(req,res,next){
    try{
        const {name, description, release_date, rating, platforms, image, genres} = req.body;
        if(name&&description&&platforms){
            const newVideogame = {
                name, description, platforms,
                release_date: 'unknown',
                rating: 0,
                image: '',
                genres: ''
            }
            if(image) newVideogame.image = image
            if(genres) newVideogame.genres = genres
            if(rating){
                if(rating>=0 && rating<=5) newVideogame.rating= rating
            }
            // ^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$
            if(release_date){
               newVideogame.release_date = release_date
                // if(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(release_date)) newVideogame.release_date= release_date
            }
            const add = await Videogame.findOrCreate({where:{
                name: newVideogame.name,
                description: newVideogame.description,
                release_date: newVideogame.release_date,
                rating: newVideogame.rating,
                platforms: newVideogame.platforms,
                image: newVideogame.image,
                genres: newVideogame.genres
            }})
            if(!add[0]._options.isNewRecord){
                const msg= 'this activity has already been created'
                res.status(400).send(msg)
            }else {
                res.send(add[0].dataValues)
            }
        }else res.status(400).send('name, description and platforms are required')
    }catch(err){
        next(err)
    }
})

module.exports = router