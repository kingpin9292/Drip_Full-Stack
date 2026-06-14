import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt, { genSalt } from "bcrypt";
import JWT from "jsonwebtoken";
import "dotenv/config";

const createToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET);
};

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    /*way-1 :used for modifying document before saving
    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();*/

    //alternative way:creating instant document
    const newUser = await userModel.create({ name, email, password: hashedPassword });

    const token = createToken(newUser._id);

    res.json({ success: true, token });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    res.json({ success: false, msg: "User don't exist" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (isMatch) {
    const token = createToken(user._id);
    res.json({ success: true, token });
  } else {
    res.json({ success: false, msg: "Invalid credentials" });
  }
};

const adminLogin = async (req, res) => {};

export { registerUser, loginUser, adminLogin };
