const jwt = require("jsonwebtoken");
const jwtsalt = process.env.JWT_SALT;

const invalidToken = {
    success:0,
    message:"Token expired/invalid"
}
const notLoggedIn = {
    success:0,
    message:"Please login first"
}

module.exports = {
    checkToken: function(req,res,next){
        //token = req.headers.bearer; 
        var token; 
        try{
            token = req.headers.authorization.split(" ")[1]; 
        } catch(error) {
            return res.json(notLoggedIn); 
        }
        
        if(token){
            jwt.verify(token, jwtsalt, function(err,decoded) {
                if(err){
                    //console.log(err);
                    return res.json(invalidToken); 
                } else {
                    req.decode = decoded; // attaching decoded info in req 
                    next(); 
                }
            });
        } else {
            return res.json(notLoggedIn); 
        }
    }
};