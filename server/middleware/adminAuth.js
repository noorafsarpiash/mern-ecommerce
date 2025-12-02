import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Token check: header or body
    const token = req.headers.token;

    if (!token || typeof token !== "string") {
      return res.json({
        success: false,
        message: "Token is required and must be a string",
      });
    }

    // Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { isAdmin } = decoded;
    // Admin check
    if (!isAdmin) {
      return res.json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    // If everything is fine
    next();
  } catch (error) {
    console.log("Admin Auth Error:", error);
    return res.json({
      success: false,
      message: "Invalid token or something went wrong",
    });
  }
};

export default adminAuth;
