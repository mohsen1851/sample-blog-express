const jwt = require("jsonwebtoken");

function abort(res, code, message) {
    res.status(code).send({message: message})
}

function generateAccessToken(data) {
    return  jwt.sign(data, 'er648t6b4rt6n4rt4n6r');
}

module.exports = {abort, generateAccessToken}