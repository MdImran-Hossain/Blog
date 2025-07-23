const mongoose = require('mongoose')
 const { Schema }= mongoose;
 const userSchema = new Schema({
    userName:{
        type:String,
        required: true,
        trim:true,
        min:[5, "at least use 5 checter"],
        max:[15, "Use only 15 checter"]
    },
      email:{
        type:String,
        required: true,
        trim:true,
    },
     avatar:{
        type:String,
        trim:true,
    },
     password:{
        type:String,
        required: true,
        trim:true,
        min:[5, "at least use 5 checter"],
        max:[15, "Use only 15 checter"]
    },
     lastLong:{
        type:Date,
        trim:true,
    },
    phoneNumber:{
        type:String,
        required: true,
        trim:true,
    
        max:[11, 'must be 11 number']
    
    },
     permanentAdress:{
        type:String,
        trim:true,
    },
     presentAdress:{
        type:String,
        trim:true,
    },

 },{
    timestamps: true
 })


 module.exports = mongoose.model('user', userSchema)