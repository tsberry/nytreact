const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.get("/", function (req, res) {
    res.end();
});

module.exports = router;