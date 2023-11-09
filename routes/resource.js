var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var plants_controller = require('../controllers/plants');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/plants', plants_controller.plants_create_post);
// DELETE request to delete Costume.
router.delete('/plants/:id', plants_controller.plants_delete);
// PUT request to update Costume.
router.put('/plants/:id', plants_controller.plants_update_put);
// GET request for one Costume.
router.get('/plants/:id', plants_controller.plants_detail);
// GET request for list of all Costume items.
router.get('/plants', plants_controller.plants_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"costumes", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
