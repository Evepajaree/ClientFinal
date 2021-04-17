const bcrypt = require('bcrypt')

let makeup = {
    list: [
        { id: 1, sex: "Male", skincolor:"Black", age:20 ,hairstyle:"Deadrock" ,skincondition:"Good"},
        { id: 2, name: "Female", skincolor:"White", age:50 ,hairstyle:"Student",skincondition:"Notgood"  }

    ]
}

const SECRET = 'your_jwt_secret'
const NOT_FOUND = -1

exports.users = users 
exports.SECRET = SECRET
exports.NOT_FOUND = NOT_FOUND

exports.setUsers = function(_users) { 
  users = _users;
}

// === validate username/password ===
exports.isValidUser = async (username, password) => { 
    const index = users.users.findIndex(item => item.username === username) 
    return await bcrypt.compare(password, users.users[index].password)
}

// return -1 if user is not existing
exports.checkExistingUser = (username) => {
    return users.users.findIndex(item => item.username === username)
}