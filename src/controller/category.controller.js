const { validateBody } = require("../helpers/validator");
const categoryModel = require("../models/category.model");

//  crate categroy

exports.createCategory= async(req, res)=>{
    try {
       
       const {isEmpty, fielName }= validateBody(req)
       if(isEmpty){
        return res.status(401).json({
            msg: `${fielName} is missing`
        })
       }
        //  isExist category name
        const isExist= await categoryModel.findOne({categoryName: req.body.categoryName})
        if(isExist){
            return res.status(401).json({
            msg: `${isExist.categoryName} already exit`
        })
        }

        //  save the db
        const category = await new categoryModel(
            {
                categoryName: req.body.categoryName,
                categoryDescreption:req.body.categoryDescreption
            }
        ).save()
        
        if(!category){
             return res.status(401).json({
            msg: `${req.body.categoryName} create faieled`
        })
    }

      return res.status(201).json({
            msg: `${req.body.categoryName} create sucessdully`
        })
        
    } catch (error) {
        console.log('error from create controller', error)
        return res.status(401).json({
            msg:'error from create ctragroy controller',
            error: error
        })
    }
}


//  getallcategory

exports.getAllCategory= async(req, res)=>{
    try {
       
            const allCategory= await categoryModel.find({})
            if(!allCategory){
                 return res.status(401).json({
            msg:'category not found',
            
        })
        }

        return res.status(200).json({
            msg:`category get sucessfully`,
            data: allCategory,
            status:200
        })
        
    } catch (error) {
        console.log('error from get all category controller', error)
        return res.status(401).json({
            msg:'error from get ctragroy controller',
            error: error
        })
    }
}



//   get singl category

exports.getSingleCategory= async(req, res)=>{
    try {
       const {name}= req.params
       if(!name){
         return res.status(401).json({
            msg:'category name missing',
           
        })
       }
       const singleCategroy= await categoryModel.findOne({categoryName: name});

        if(!singleCategroy){
            return res.status(401).json({
            msg:'category not found',
           
        })
        }
        return res.status(201).json({
            msg:'categoryfounded',
            data: singleCategroy,
            status:"ok"
           
        })
    } catch (error) {
        console.log('error from get single category controller', error)
        return res.status(401).json({
            msg:'error from get single ctragroy controller',
            error: error
        })
    }
}


//  upadte category

exports.updateCategory= async(req, res)=>{
    try {
        const {id}=req.params;

     const updateCategory=await categoryModel.findOne({_id:id});
     updateCategory.categoryName =req.body.categoryName || updateCategory.categoryName
     updateCategory.categoryDescreption=req.body.categoryDescreption|| updateCategory.categoryDescreption   
       
 await updateCategory.save()
 return res.status(201).json({
            msg:'update sucessfully',
            data: updateCategory
            
        })

    } catch (error) {
        console.log('error from update category controller', error)
        return res.status(401).json({
            msg:'error from update ctragroy controller',
            error: error
        })
    }
}


//  dalete category

exports.deleteCategory= async(req, res)=>{
    try {
        const {id}=req.params;

     const deleteCategoryItem=await categoryModel.findOneAndDelete({_id:id});
       if(!deleteCategoryItem){
          return res.status(401).json({
            msg:' ctragroy not found'
        })
       }
 
 return res.status(201).json({
            msg:'delete sucessfully',
            data: deleteCategoryItem
            
        })

    } catch (error) {
        console.log('error from delete category controller', error)
        return res.status(401).json({
            msg:'error from delete ctragroy controller',
            error: error
        })
    }
}