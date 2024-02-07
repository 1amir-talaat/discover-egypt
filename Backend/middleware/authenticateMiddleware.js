import jwt from "jsonwebtoken";

const authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token not provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    req.user = decodedToken;
    next();
  });
};

export { authenticateMiddleware };