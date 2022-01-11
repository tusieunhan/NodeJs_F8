const Course = require('../models/Course')
const { mutipleToObject, toObject } = require('../../util/mongoose')
class CourseController {

    //COURSE/:SLUG
    show(req, res , next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('shows/show',{course: toObject(course)})
            })
            .catch(next);
    }
    // COURSE/CREATE
    create(req, res , next) {
        res.render('shows/create')
    }

    edit(req, res , next) {
        Course.findById(req.params.id)
        .then(course => res.render('shows/edit', {course: toObject(course)}))
        .catch(next);
    }

    store(req, res , next) {
        // res.json(req.body)
        const course = new Course(req.body);
        course.save()
            .then(() => {res.redirect('/')})
    }

    update(req, res , next) {
        Course.updateOne({_id: req.params.id},req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)

    }
    
    destroy(req, res , next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next)
    }
}

module.exports = new CourseController;