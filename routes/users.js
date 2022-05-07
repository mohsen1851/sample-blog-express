let router = require('express').Router();
const {storeUser, getUsers, login} = require("../controllers/UserController");

router.post('/', async (req, res) => await storeUser(req, res))
router.post('/login', async (req, res) => await login(req, res))
router.get('/', async (req, res) => await getUsers(req, res))

module.exports = router;
