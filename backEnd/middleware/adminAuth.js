import JWT from "jsonwebtoken";
const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, msg: "Not authorized, Login Again" });
    }

    const tokenDecode = JWT.verify(token, process.env.JWT_SECRET);

    if (tokenDecode !== process.env.ADMIN_EMAIL + process.env.ADOMIN_PASSWORD) {
      res.json({ success: false, msg: "Not authorized, Login Again" });
    }
  } catch (error) {
    res.json({ success: false, msg: error.message });
  }
};

export default adminAuth;
