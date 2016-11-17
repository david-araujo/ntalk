module.exports = function(app) {
    var User = app.models.user;
    var HomeController = {
        index: function(req, res) {
            res.render('home/index');
        },
        login: function(req, res) {
            var email = req.body.user.email,
                name = req.body.user.name;
            if (email && name) {
                var user = req.body.user;
                user['contacts'] = [];
                req.session.user = user;
                res.redirect('/contacts');
            } else {
                res.redirect('/');
            }
        },
        logout: function(req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };
    return HomeController;
};
