// const {find,findById,remove,update,create} = require("./users.model");
const Users = require("./users.model");
const asyncMiddleware = require("../../asyncMiddleware");

async function find(req,res) {
       const users = await Users.find();
       res.json(users);
}

async function create(req,res) {
       const users = await Users.create(req.body);
       res.json(users);
}




module.exports  = {
    find:asyncMiddleware(find),
    // findById,
    // remove,
    // update,
    create:asyncMiddleware(create)
}

