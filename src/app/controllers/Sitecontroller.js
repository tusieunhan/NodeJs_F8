const Course = require('../models/Course')
const { mutipleToObject, toObject } = require('../../util/mongoose')
class SiteController {
    
    search(req, res) {
        res.render('search')
    }
    index(req, res) {

        Course.find({})
        .then(courses => {
            courses = mutipleToObject(courses);
            res.render('home', {courses});
        })
        .catch(err => next(err))
    }
}

module.exports = new SiteController;