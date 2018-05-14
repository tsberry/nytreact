const db = require("../models");
const axios = require("axios");
module.exports = {
    getArticles: function (req, res) {
        db.Article.find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    save: function (req, res) {
        db.Article.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    delete: function (req, res) {
        db.Article.remove({_id: req.body._id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};