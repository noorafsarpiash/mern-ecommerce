import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    // Token check: header or body
    let token = req.headers.authorization?.split(" ")[1] || req.body.token;

    if (!token || typeof token !== "string") {
      return res.json({
        success: false,
        message: "Token দিতে হবে এবং তা string হতে হবে",
      });
    }

    // Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Admin check
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "Unauthorized Access",
      });
    }

    // যদি সব ঠিক থাকে
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
