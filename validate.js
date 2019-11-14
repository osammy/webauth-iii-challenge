function validate(req,res,next) {
    if(req.session && req.session.user) next();
    else next({status:403,message:"You are not authorised to access this document!"})
}

module.exports = validate;