var express = require('express');
const plants_controlers= require('../controllers/plants');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}



router.get('/',plants_controlers.plants_view_all_Page);

// router.get('/plants/:id', plants_controlers.plants_detail);
// module.exports = router;

/* GET detail plants page */
router.get('/detail',secured, plants_controlers.plants_view_one_Page);

/* GET create plants page */
router.get('/create',secured, plants_controlers.plants_create_Page);

/* GET create update page */
router.get('/update',secured, plants_controlers.plants_update_Page);

/* GET delete costume page */
router.get('/delete',secured, plants_controlers.plants_delete_Page);

/* GET plants */
// router.get('/', plants_controlers.plants_view_all_Page );
module.exports = router;