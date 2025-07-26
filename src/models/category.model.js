const mongoose = require('mongoose')
 const { Schema }= mongoose;

const categorySchema = new Schema({
    categoryName:{
        type: String,
        requried: true,
        trim: true
    }, 
    categoryDescreption:{
        type:String,
        requried: true,
        trim:true
    },
    isActive:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('category', categorySchema)