
function login({email, password, req}){
    User.findOne({ email: email.toLowerCase()}, (err, user) => {
        console.log("el usuario: ", user, err);
        return new Promise((resolve, reject) => {
            if(err) reject(err);
            resolve(user)
        })
    })
}

module.exports = { login };