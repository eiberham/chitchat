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

module.exports = { login };