import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  // 1. Get the token
  const authHeader = req.headers["authorization"];

  const pureToken = authHeader.split(" ")[1];

  if (!pureToken) {
    return res.status(401).json({
      message: "You are not authorized to perform this action, Token not found",
    });
  }
  // 2. Check if the token is valid
  // verify a token symmetric
  jwt.verify(pureToken, "this is private_key", function (err, decoded) {
    if (err) {
      return res.status(401).json({
        message: "Token invalid",
      });
    }
    // console.log(decoded, "This is decoded");
    // 3. If token is valid then proceed forward else block the request
    next();
  });
};
