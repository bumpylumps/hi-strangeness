const express = require("express");
const router = express.Router();


const podcastController = require('../controllers/podcast');

router.get('/podcast', podcastController.getEpisodes);


module.exports = router; 
