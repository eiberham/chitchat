const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    name: String,
    gender: String,
    password: String
});

mongoose.model('user', UserSchema);