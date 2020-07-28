const jwt = require("jsonwebtoken"),
  { user } = require("../models"),
  { response } = require("../helpers"),
  API_KEY = process.env.API_KEY;

module.exports = {
  tokenCheck: async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (authHeader) {
        token = authHeader.split(" ")[1];
        const verified = jwt.verify(token, API_KEY);
        req.user = verified;
        next();
      } else {
        return response(res, 401, true, "Access denied!");
      }
    } catch (err) {
      return response(res, 401, true, err);
    }
  },
  roleCheck: async (req, res, next) => {
    try {
      const { id } = req.user;
      const User = await user.findOne({ where: { id } });
      if (User.listAs === 1) {
        next();
      } else {
        return response(res, 401, true, "Access denied!");
      }
    } catch (err) {
      return response(res, 401, true, err);
    }
  },
};
