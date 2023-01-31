const moongose = require("mongoose");

const userShema = new moongose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    }, //
    lastName: {
      type: String,
      required: true,
      trim: true,
    }, //
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    }, //
    nickName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    }, //
    password: {
      type: String,
      required: true,
      trim: true,
    }, //
    rol: {
      type: String,
      required: true,
      trim: true,
    }, //

    idiom: {
      type: String,
      required: true,
      trim: true,
    }, //
    state: {
      type: String,
      required: true,
      trim: true,
    }, //
    country: {
      type: String,
      required: true,
      trim: true,
    }, //
    city: {
      type: String,
      required: true,
      trim: true,
    }, //
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    }, //
  },
  {
    timestamps: true,
  }
);

const User = moongose.model("User", userShema);

module.exports = User;
