const { UserServices } = require('../services')
const transporter  = require("../utils/mailer");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    const result = await UserServices.create(newUser);

    res.status(201).json(result);

    await transporter.sendMail({
      from: "hectormauriciodegante@gmail.com",
      to: result.email,
      subject: "Thanks for join us",
      text: `Hi ${result.username} enjoy your shopping`,
      html: `<p>Hi<h1>${result.username} </h1>enjoy your shopping</p>`
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Missing data",
    });
  }
};

const getAllUsers = async (req, res, next) =>{
  try {
    const users = await UserServices.getAll();
    res.json({users})
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "somenthig is wrong",
    });
    
  }

}
module.exports = {
  userRegister,
  getAllUsers
};
