var plants = require('../models/plants');
// List of all plantss
exports.plants_list = async function(req, res) {
    try{
    theplantss = await plants.find();
    res.send(theplantss);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

exports.plants_detail = async function(req, res) {
  console.log("detail" + req.params.id)
  try {
  result = await plants.findById( req.params.id)
  res.send(result)
  } catch (error) {
  res.status(500)
  res.send(`{"error": document for id ${req.params.id} not found`);
  }
  };
  
    

// for a specific plants.
exports.plants_detail = function(req, res) {
res.send('NOT IMPLEMENTED: plants detail: ' + req.params.id);
};
// Handle plants create on POST.
exports.plants_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: plants create POST');
};
// Handle plants delete form on DELETE.
exports.plants_delete = function(req, res) {
res.send('NOT IMPLEMENTED: plants delete DELETE ' + req.params.id);
};
// Handle plants update form on PUT.
exports.plants_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: plants update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.plants_view_all_Page = async function(req, res) {
    try{
    theplantss = await plants.find();
    res.render('plants', { title: 'plants Search Results', results: theplantss });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle plants create on POST.
exports.plants_create_post = async function(req, res) {
    console.log(req.body)
    let document = new plants();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.name = req.body.name;
    document.category = req.body.category;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };