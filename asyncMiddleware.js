const asyncMiddleware = fn =>
  (req, res, next) => {
    
    const modifiedNext = e => next({status:500,message:`Operation failed, ${e.message}`});

    Promise
    .resolve(fn(req, res, next))
    .catch(modifiedNext);

  };

  module.exports = asyncMiddleware;