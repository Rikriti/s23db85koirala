const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
    name: String,
    category: String,
    price: Number
})
module.exports = mongoose.model("Product",
    productSchema)