const {model} = require("mongoose");
const bcrypt = require("bcrypt");
const {UserSchema} = require("../schemas/UserSchema");

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const UserModel = new model( "user", UserSchema);

module.exports = {UserModel};