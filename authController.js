const Users = require("./resources/users/users.model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
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
      // if creds good, stuff a thing inside req.session
      // which will be there when other endpoints are hit
      // by the same client
      req.session.user = user;
      res.status(200).json({
        message: `Welcome ${user.username}!`
      });
    } else {
      res.status(401).json({ message: "Invalid Credentials" });
    }
  } catch(e) {
    next({status:500,message:"Login failed, "+e.message})
  }


};

module.exports = {
    login,
    register
}