const userModel = require('../models/user.models')

exports.registration =  async(req, res)=>{
    try {
        const {userName, email, password, phoneNumber}= req.body;

    if(!userName){
        return res.status(401).json({
            msg:"useName missing"
        })
    }
     if(!email){
        return res.status(401).json({
            msg:"email missing"
        })
    }
     if(!password){
        return res.status(401).json({
            msg:"password missing"
        })
    }
     if(!phoneNumber){
        return res.status(401).json({
            msg:"phoneNumber missing"
        })
    }
const isExist= await userModel.findOne({email:email});
if(isExist){
    return res.status(401).json({
        msg:`${email} already exist`
    })
}

await userModel.create(
    {
        userName, 
        email, 
        password, 
        phoneNumber,
        ...req.body
});
return res.status(201).json({
    msg:'registation successfully'
})
    } catch (error) {
        res.status(501).json({
            msg:'server error',
            error:error
        })
    }
}

//  logging
 exports.login =async(req, res)=>{
    try {
        console.log(req.body)
        const isExist =await userModel.findOne({$and:[{email: req.body.email, password:req.body.password}]})
        console.log(isExist);
        if(!isExist){
            return res.status(401).json({
                msg: "email/password invalid"
            })
        }
        return res.status(200).json({
            msg:"login succesfull"
        })
   
    } catch (error) {
         res.status(501).json({
            msg:'server error',
            error:error
        })
    }
 }