var plants = require('../models/plants');
// List of all plants
exports.plants_list = async function (req, res) {
    try {
        theplantss = await plants.find();
        res.send(theplantss);

    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

};

// Handle plants create on POST. 
exports.plants_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: plants create POST');
};
// Handle plants delete form on DELETE. 
exports.plants_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: plants delete DELETE ' + req.params.id);
};


// Handle a show all view
exports.plants_view_all_Page = async function (req, res) {
    try {
        theplantss = await plants.find();
        res.render('plants', { title: 'plants Search Results', results: theplantss });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific plants.
exports.plants_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await plants.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

//Handle plants update form on PUT.
exports.plants_update_put = async function (req, res) {
    try {
        // console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
        let toUpdate = await plants.findById(req.params.id)

        // // Do updates of properties
        if (req.body.name) { toUpdate.name = req.body.name };
        if (req.body.category) { toUpdate.category = req.body.category };
        if (req.body.price) { toUpdate.price = req.body.price };
        let result = await toUpdate.save();
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(' {"error": $ {err}: Update for id $ {req.params.id} failed');
    }
};