var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

userSchema.methods.encryptPassword = password => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null) // 5 rounds of salt creation
};

userSchema.methods.validPassword = password => {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);