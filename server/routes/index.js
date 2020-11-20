const register = require("./register");

module.exports = function (app) {
  app.use("/", register);
};
