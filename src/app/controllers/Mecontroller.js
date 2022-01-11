const Course = require('../models/Course');
const { mutipleToObject } = require('../../util/mongoose')

class MeController {
    storedCourses(req, res, next) {
        Course.find({})
            .then( (courses) =>res.render('me/stored-courses',{
                courses: mutipleToObject(courses)
            }))
            .catch( (next))
    }
}

module.exports = new MeController;