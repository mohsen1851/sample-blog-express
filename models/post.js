const mongoose=require("mongoose")
const PostModel=mongoose.model("post",new mongoose.Schema({
    title:{type:String,require:true},
    body:{type:String,require:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"user"}
}))

module.exports = PostModel