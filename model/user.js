const mongoose=require('mongoose')
// const Schema variable name and the oher part schema should be caps
const schema=mongoose.Schema({
    // same as the front end
    Name:String,
    Age:Number,
    Dept:String,
    salary:Number
})
// user made based on schema
const userModel=mongoose.model("user",schema);
module.exports=userModel