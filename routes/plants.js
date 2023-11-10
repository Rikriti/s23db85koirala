var express = require('express');
const plants_controlers= require('../controllers/plants');
var router = express.Router();

router.get('/plants/:id', plants_controlers.plants_detail);
module.exports = router;