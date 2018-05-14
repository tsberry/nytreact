const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
.get(articlesController.getArticles)
.post(articlesController.save)
.delete(articlesController.delete);

module.exports = router;