const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {type: String, required: true},
  phoneNumber: {type: Number, required: true},
  address: {type: String, required: true},
  created: {type: Date, default: Date.now},
});

userSchema.statics.signup = function({fullName, address, phoneNumber}){
  console.log(fullName, address, phoneNumber);
  return new Promise((resolve, reject) => {
      const user = new User({fullName, phoneNumber, address});
      user.save(err => {
        if(err) return reject(err);
        resolve(user);
      });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
