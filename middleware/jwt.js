const jwt = require('jsonwebtoken')

// Verify token
exports.authentication = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    
    const token = authHeader && authHeader.split(" ")[1];
  
    if (token == null) {
      return res.status(401).json({ msg: "token not there" });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send({ msg: "Invalid token" });
      }
      req.user = user;
      next();
    });
  };