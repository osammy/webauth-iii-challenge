const Users = require("./resources/users/users.model");
const bcrypt = require("bcryptjs");
const verify = require("./verify");

const register = async (req, res,next) => {
    console.log("in here now!")
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
  user.password = hash;

  try {
    const saved = await Users.create(user);
    res.status(201).json(saved);
  } catch(e) {
      next({status:500, message:"Couldnt register user, "+e.message})
  }
};

const login = async (req, res,next) => {
  let { username, password } = req.body;
  try {
    const user = await Users.find({ username }).first()

    if (user && bcrypt.compareSync(password, user.password)) {
      const {id} = user;
      const token = verify.getToken(user,'1d');
      res.status(200).json({
        id,
        token,
      });
    } 
    else res.status(401).json({ message: "Invalid Credentials" });
    
  } catch(e) {
    next({status:500,message:"Login failed, "+e.message})
  }


};

module.exports = {
    login,
    register
}