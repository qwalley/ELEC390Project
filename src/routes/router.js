// filename: router.js
// author: Will Alley

const express = require('express');
const router = express.Router();
const anotherpageController = require('../controllers/anotherpage.controller.js');
const anotherpage2Controller = require('../controllers/anotherpage2.controller.js');
const anotherpage3Controller = require('../controllers/anotherpage3.controller.js');
const homeController = require('../controllers/home.controller.js');

router.get('/', homeController);

router.get('/anotherpage', anotherpageController);

router.get('/anotherpage2', anotherpage2Controller);

router.get('/anotherpage3', anotherpage3Controller);

module.exports = router;