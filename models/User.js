const mongoose = require('mongoose');

const User = new mongoose.Schema ({
  email: String,
  password: String,
  googleId: String,
  facebookId: String
});

module.exports = User = new mongoose.model("User", userSchema);
