import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt, { genSalt } from "bcrypt";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //check if a user already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, msg: "User already exist" });
    }
    //email & password validation
    if (!validator.isEmail(email)) {
      return res.json({ success: false, msg: "Please provide a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, msg: "Please provide a strong password" });
    }

    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, genSalt);

    /*way-1 :used for modifying document before saving
    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();*/

    //alternative way:creating instant document
    const newUser = await userModel.create({ name, email, password: hashedPassword });
  } catch (err) {
    console.log(err);
  }
};
const loginUser = async (req, res) => {
  res.json({ msg: "aa" });
};

const adminLogin = async (req, res) => {};

export { registerUser, loginUser, adminLogin };
