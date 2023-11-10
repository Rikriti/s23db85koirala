const mongoose = require("mongoose")
const plantsSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number
})
module.exports = mongoose.model("plants",
    plantsSchema)