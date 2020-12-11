
const cantAccess = {
    "success":0,
    "message":"You are not a regulator"
}

module.exports = {
    checkRegulator: function(req,res,next){ //A regulator is an organization 
        //token = req.headers.bearer; 
        const payload = req.decode.payload; 
        if(payload.organisation_id) { 
            next();
        } else {
            return res.json(cantAccess); 
        };
    }
}