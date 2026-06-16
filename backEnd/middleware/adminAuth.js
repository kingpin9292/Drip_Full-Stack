import JWT from "jsonwebtoken";
const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, msg: "Not authorized, Login Again" });
    }

    const token_Decode = JWT.verify(token, process.env.JWT_SECRET);

    if (token_Decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      res.json({ success: false, msg: "Not authorized, Login Again" });
    }
    next();
  } catch (error) {
    res.json({ success: false, msg: error.message });
  }
};

export default adminAuth;
