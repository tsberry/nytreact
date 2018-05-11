const router = require("express").Router;
const articlesController = require("../../controllers/articlesController");

router.route("/")
.get();

module.exports = router;