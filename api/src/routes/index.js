const { Router } = require('express');

const videogames = require('./videogames')
const name = require('./byName')
const ID = require('./byId')
const genre = require('./genre')
const post = require('./postVideogame')
const platforms = require('./platforms')
const router = Router();


router.use('/', videogames)
router.use('/', name)
router.use('/',ID)
router.use('/',genre)
router.use('/', post)
router.use('/', platforms)

module.exports = router;
