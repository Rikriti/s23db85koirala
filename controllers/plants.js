var plants = require("../models/plants");

exports.plants_list = async function (req, res) {
  res.send("NOT IMPLEMENTED: plants list");
};
// for a specific plants.
exports.plants_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: plants detail: " + req.params.id);
};
// Handle a show one view with id specified by query
exports.plants_view_one_Page = async function (req, res) {
  console.log("view for id " + req.query.id);
  try {
    result = await plants.findById(req.query.id);
    res.render("plantsDetail", { title: "Plants Detail", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.plants_create_Page = function (req, res) {
  console.log("create view");
  try {
    res.render("plantscreate", { title: "Plants Create" });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for updating a costume.
// query provides the id
exports.plants_update_Page = async function (req, res) {
  console.log("update view for item " + req.query.id);
  try {
    let result = await plants.findById(req.query.id);
    res.render("plantsupdate", { title: "Plants Update", toShow: result });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle a delete one view with id from query
exports.plants_delete_Page = async function (req, res) {
  console.log("Delete view for id " + req.query.id);
  try {
    result = await plants.findById(req.query.id);
    res.render("plantsdelete", {
      title: "plants Delete",
      toShow: result,
    });
  } catch (err) {
    res.status(500);
    res.send(`{'error': '${err}'}`);
  }
};

// Handle plants create on POST.
exports.plants_create_post = async function (req, res) {
  console.log(req.body);
  let document = new plants();
  document.name = req.body.name;
  document.category = req.body.category;
  document.price = req.body.price;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// Handle plants delete form on DELETE.
exports.plants_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await plants.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};
// Handle plants update form on PUT.
exports.plants_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Book.findById(req.params.id)
        // Do updates of properties
        if (req.body.name)
            toUpdate.name = req.body.name;
        if (req.body.category) toUpdate.category = req.body.category;
        if (req.body.price) toUpdate.price = req.body.price;

        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
    }
}

// List of all plants
exports.plants_list = async function (req, res) {
  try {
    theplants = await plants.find();
    res.send(theplants);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// VIEWS
// Handle a show all view
exports.plants_view_all_Page = async function (req, res) {
  try {
    theplants = await plants.find();
    res.render("plants", {
      title: "plants Search Results",
      results: theplants,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};
// for a specific plants.
exports.plants_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await plants.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};
