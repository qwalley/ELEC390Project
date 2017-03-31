// filename: router.js
// author: Will Alley

const express = require('express');
const router = express.Router();
const anotherpageController = require('../controllers/anotherpage.controller.js');
const homeController = require('../controllers/home.controller.js');

router.get('/', homeController);

router.get('/anotherpage', anotherpageController);

module.exports = router;