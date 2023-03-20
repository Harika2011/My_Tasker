var express = require('express');
var router = express.Router();
var taskscollection = require('./users');
const app = express();


router.get('/', function(req, res, next) {
    taskscollection.find()
        .then(function(docs) {
            res.render('index', { docs });
        })
});


router.post('/submit', (req, res) => {
    taskscollection.create({
            content: req.body.task
        })
        .then(() => {
            res.redirect("/");
        })
})


module.exports = router;