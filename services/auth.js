const mongoose = require('mongoose');

const User = mongoose.model('user');

function login({email, password, req}){
    return User.findOne({ email: email.toLowerCase()}, (err, user) => {
        return new Promise((resolve, reject) => {
            if(err) reject(err);
            resolve(user)
        })
    })
}
function signup({ email, name, gender, password, req }) {
    const user = new User({ email, name, gender, password });
    return User.findOne({ email })
        .then(existingUser => {
            if (existingUser) { throw new Error('Email in use'); }
            return user.save();
        })
}

module.exports = { login, signup };