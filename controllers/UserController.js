const {storeUserValidation, loginUserValidation} = require("../validations/users");
const UserModel = require("../models/user");
const {abort, generateAccessToken} = require("../helper");
const bcrypt = require("bcrypt");
const _ = require("lodash")

async function storeUser(req, res) {
    const {error} = storeUserValidation(req.body)

    if (error) return abort(res, error.message)

    let user = new UserModel({
        name: req.body.name,
        mobile: req.body.mobile,
        password: await bcrypt.hash(req.body.password, 10)
    })
    res.send(await user.save())
}

async function login(req, res) {
    const {error} = loginUserValidation(req.body)

    if (error) return abort(res,422, error.message)

    let user = await UserModel.findOne({mobile: req.body.mobile})
    if (user && await bcrypt.compare(req.body.password, user.password)) res.send(
        {token: generateAccessToken({id: user._id}), ..._.pick(user, ["name","id","mobile"])}
    )
    ;
    else
        abort(res, 404, 'کاربر پیدا نشد')
}

async function getUsers(req, res) {
    let users = await UserModel.find();
    res.send({users})
}

module.exports = {storeUser, getUsers, login}