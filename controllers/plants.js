var plants = require('../models/plants');


// List of all plants
exports.plants_list = async function(req, res) {
    try {
      const plants = await plants.find({});
      res.render('index', { title: 'plants', plants });
    } catch (err) {
      console.error('Error finding plants:', err);
      res.status(500).send('Error finding plants');
    }
  };
    

//List of all plantss
exports.plants_list = function(req, res) {
    res.send('NOT IMPLEMENTED: plants list');
}

//for a specific plants
exports.plants_detail = function(req, res) {
    res.send('NOTIMPLEMENTED: plants detail: ' +req.params.id);
}

// Handle plants create on POST.
exports.plants_create_post = async function(req, res) {
    console.log(req.body)
    let document = new plants();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // document.name = req.body.name;
    // document.category = req.body.category;
    // document.price = req.body.price;

    // Handle Plants create on POST.
exports.plants_create_post = async function (req, res) {
    try {
      const newPlants = new plants({
        name: req.body.name,
        category: req.body.category,
        price: req.body.price
      });
  
      await newPlants.save();
      res.status(201).send(newPlants);
    } catch (err) {
      console.error('Error saving plants:', err);
      res.status(500).send('Error saving plants');
    }
  };
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }

// Handle plants delete form on DELETE.
exports.plants_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: plants delete DELETE ' + req.params.id);
    };
// Handle plants update form on PUT.
exports.plants_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: plants update PUT' + req.params.id);
    };

// List of all plantss
exports.plants_list = async function(req, res) {
try{
plants = await plants.find();
res.send(plants);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

//VIEWS
// Handle a show all view
exports.plants_view_all_Page = async function(req, res) {
try{
plants = await plants.find();
res.render('plants', { title: 'plants Search Results', results: plants });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

    