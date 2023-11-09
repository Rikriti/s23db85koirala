var express = require('express');
const plants_controlers= require('../controllers/plants');
var router = express.Router();
/* GET tables */
router.get('/', plants_controlers.plants_view_all_Page );
module.exports = router;