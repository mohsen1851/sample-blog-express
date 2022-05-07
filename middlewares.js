const jwt = require("jsonwebtoken");
const {abort} = require("./helper");
const UserModel = require("./models/user");

async function auth(req, res, next) {
    const token = req.header("Authorization")
    if (!token) return abort(res, 401, "عدم دسترسی")

    try {
        const auth = jwt.verify(token, "er648t6b4rt6n4rt4n6r");
        const user = await UserModel.findById(auth.id);
        if (user) req.body.user = user; else abort(res, 401, "عدم دسترسی");
    } catch (err) {
        return abort(res, 401, "عدم دسترسی")
    }

    return next()
}

module.exports = {auth}