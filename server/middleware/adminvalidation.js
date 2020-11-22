
const cantAccess = {
    "success":0,
    "message":"You are not a regulator"
}

module.exports = {
    checkAdmin: function(req,res,next){
        //token = req.headers.bearer; 
        const payload = req.decode.payload; 
        if(payload.organization_id === null) { 
            res.json(cantAccess); 
        } else {
            next(); 
        };
    }
}