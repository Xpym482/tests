const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {type: String, required: true},
  personalCode: {type: Number, required: true, unique: true},
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

userSchema.statics.code = function({fullName, address, phoneNumber, personalCode}){
    console.log(fullName, address, phoneNumber, personalCode);
    return new Promise((resolve, reject) => {
        this.findOne({personalCode}, (err, userDoc) => {
            if (err) return reject(err);
            if (userDoc === null) {
                    const user = new User({fullName, phoneNumber, address, personalCode});
                    user.save(err => {
                        if (err) return reject(err);
                        resolve(user);
                    });
            }
            else if(userDoc != null){
                    User.update({personalCode}, {
                        fullName,
                        phoneNumber,
                        address
                    }, (err, response) => {
                        if(err) return reject(err);
                        console.log(response);
                        resolve(User);
                    });
            }
        });
    });
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
