const Report = require('../models/Report');

module.exports = {
    index: (req, res) => {
        Report.find().then(reports => {
            res.render('report/index', {'reports': reports});
        });
    },
    createGet: (req, res) => {

        res.render('report/create');
    },
    createPost: (req, res) => {

        let reportsArgs = req.body;

        if (!reportsArgs.status ||
            !reportsArgs.message ||
            !reportsArgs.origin) {
            return res.redirect('/');
        }

        Report.create(reportsArgs).then(report => {
            res.redirect('/');
        });
    },
    detailsGet: (req, res) => {
        let reportId = req.params.id;
        Report.findById(reportId).then(report => {
            if (report){
                res.render('report/details', report);
            }
            else {
                res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
    },

    deleteGet: (req, res) => {
        let reportId = req.params.id;
        Report.findById(reportId).then(report => {
            if (report){
                return res.render('report/delete', report);
            }
            else {
                return res.redirect('/');
            }
        }).catch(err => res.redirect('/'));
    },
    deletePost: (req, res) => {
        let reportId = req.params.id;
        Report.findByIdAndRemove(reportId).then(report => {
            res.redirect('/');
        }).catch(err => res.redirect('/'));
    }
};