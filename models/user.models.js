import mongoose from "mongoose";
//Define a schema
//A schema can have an arbitrary number of fields — each one represents a field in the documents stored in MongoDB
const userSchema = new mongoose.Schema({
    name:{type:String},
    age:{type:Number},
    class:{type:String},

})

//The mongoose. model() is used to create a collection of a particular database of MongoDB
// Models are created from schemas using the mongoose.model() method:
// The first argument is the singular name of the collection that will be created for your model
// second argument is the schema you want to use in creating the model.
export default mongoose.model.Users||mongoose.model("User",userSchema)