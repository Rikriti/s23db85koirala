const mongoose = require("mongoose")
const plantsSchema = mongoose.Schema({
    name: {
        type:String,
        length:20,
    },
    category:{
        type:String,
    },
    price:{
        type: Number,
        min: 10,
        max:1000,
    }
})
module.exports = mongoose.model("plants",
    plantsSchema)