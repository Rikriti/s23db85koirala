var express = require('express');
const plants_controlers= require('../controllers/plants');
var router = express.Router();

router.get('/',plants_controlers.plants_view_all_Page);

router.get('/plants/:id', plants_controlers.plants_detail);
module.exports = router;

/* GET detail plants page */
router.get('/detail', plants_controlers.plants_view_one_Page);

// /* GET create plants page */
// router.get('/create', plants_controlers.plants_create_Page);

// /* GET create update page */
// router.get('/update', plants_controlers.plants_update_Page);

/* GET delete costume page */
router.get('/delete', plants_controlers.plants_delete_Page);

/* GET plants */
// router.get('/', plants_controlers.plants_view_all_Page );
// module.exports = router;