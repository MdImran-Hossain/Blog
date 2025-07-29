const mongoose = require('mongoose')
 const { Schema }= mongoose;

 const blogSchema= new Schema({
    userId: {
        type:mongoose.Schema.ObjectId,
        ref: "user"
    }, 
    blogTitle:{
        type:String,
        required:true,
        trim:true
    },
    blogDrescription:{
        type:String,
        required:true,
        trim:true
    }, 
    image:{
        type:String,
        required: true
    }
 },{
    timestamps: true
 })

 module.exports = mongoose.model("blog", blogSchema)