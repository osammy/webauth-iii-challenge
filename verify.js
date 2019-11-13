const jwt = require("jsonwebtoken");


exports.getToken = function(user, expiresIn) {
    var secret = toString(process.env.SECRET_KEY); // secret must be either a string or a buffer
    return jwt.sign(user, secret, {
      expiresIn
    });
  };

  exports.verifyOrdinaryUser = function(req, res, next) {
    var token = req.headers["authorization"];
    // var secret = toString(process.env.SECRET_KEY); //secret must be a string or a buffer otherwise the jwt.verify() function will fail, and it may not tell you that this is the reason.
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
        if (err) return next({status:403,message:"you are not authorised to acces this document!"});
          req.decoded = decoded;
          next();  
      });
    } 
    else next({status:401,message:"No token Provided"});
    
  };

