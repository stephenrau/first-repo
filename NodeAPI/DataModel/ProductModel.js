let mongoose = require("mongoose"); // need a connection creator and which also provides helper method

mongoose.connect('mongodb://127.0.0.1/mernmongodb'); // create update and connect with smarttrainees

let Schema = mongoose.Schema; //

let NewSchema = new Schema(
    { 
        productName: {type: String, required: true}, 
        description: {type:String},
        price: {type:Number},
        rating: {type:String}
    }); //JSON - BSON (Binary JSON)

let ProductSchema = mongoose.model('product', NewSchema);

module.exports = ProductSchema;