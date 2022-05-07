let router = require('express').Router();
const {storePost, getPosts} = require("../controllers/PostController");
const {auth} = require("../middlewares");



router.post('/', auth, async (req, res) => await storePost(req, res))
router.get('/', async (req, res) => await getPosts(req, res))

module.exports = router;
