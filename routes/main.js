const express = require("express");
const router = express.Router();


const podcastController = require('../controllers/podcast');
const homeController = require('../controllers/home');
const aboutController = require('../controllers/about');
const videosController = require('../controllers/videos');

router.get('/', homeController.getHome);
router.get('/podcast', podcastController.getEpisodes);
router.get('/about', aboutController.getAbout);
router.get('/videos', videosController.getVideos)


module.exports = router; 
