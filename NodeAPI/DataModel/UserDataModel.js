let mongoose = require("mongoose"),
Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/mernmongodb");

let newSchema = new Schema({
    name: {type:String, required:true},
    age: Number,
    education: String,
    state:Object
});

let newSchema2 = new Schema({
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    age: Number,
    hobby: String,
});

let userSchema = mongoose.model("user", newSchema);

let userSchema2 = mongoose.model("user2", newSchema2);

module.exports = userSchema, userSchema2;