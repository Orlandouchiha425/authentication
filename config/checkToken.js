const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  let token = req.get("Authorization") || req.query.token;
  if (token) {
    token = token.replace("Bearer ", "");
    //check if token is valid and not expired
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      req.user = err ? null : decoded.user;
      //we can remove this if we don't care about logging out
      req.exp = err ? null : new Date(decoded.exp * 1000);
    });
    return next();
  } else {
    //no token was sent
    req.user = null;
    return next();
  }
};
