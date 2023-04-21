const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
//The SALT_ROUNDSvariable determines how much processing time it will take to perform the hash.
// Let's define it near the top of the module:
const SALT_ROUNDS = 6;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      requied: true,
    },
    password: {
      type: String,
      trim: true,
      minlength: 5,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  //'this' is the use document
  if (!this.isModified("password")) return next();
  //update the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
  return next();
});

module.exports = mongoose.model("User", userSchema);
