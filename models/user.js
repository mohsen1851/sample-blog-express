const mongoose=require("mongoose")
const UserModel=mongoose.model("user",new mongoose.Schema({
    name:{type:String,require:true},
    mobile:{type:String,require:true,},
    password:{type:String,require:true}
}))

module.exports = UserModel