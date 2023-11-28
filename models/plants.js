const mongoose = require("mongoose")
const plantsSchema = mongoose.Schema({
    name: String,
    category: String,
    price:{
        type: Number,
        min: 10,
        max:1000,
    }
})
module.exports = mongoose.model("plants",
    plantsSchema)