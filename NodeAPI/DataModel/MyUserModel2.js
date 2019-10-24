let mongoose = require("mongoose"); // need a connection creator and which also provides helper method

mongoose.connect('mongodb://127.0.0.1/mernmongodb'); // create update and connect with smarttrainees

let Schema = mongoose.Schema; //

let NewSchema = new Schema(
    { 
        firstName: {type:String}, 
        lastName: {type:String}, 
        age: Number, 
        hobby: {type:String}

        //SchoolName: Object//{type: String, required: true} //MandatoryField        
    }); //JSON - BSON (Binary JSON)

let myUserSchema = mongoose.model('myUser', NewSchema);

module.exports = myUserSchema;

