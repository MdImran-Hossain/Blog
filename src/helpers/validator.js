exports.validateBody=(req)=>{
 
    if(req){
  for(let field in req.body){
        if(req.body[field]===""){
            return { empty: true, fielName: field }
        }
        
    }
    }
    return {isEmpty: false, fielName: "" }
  
}