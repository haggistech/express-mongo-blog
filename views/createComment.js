module.exports = (req, res) => {
    if (req.session.userId) {
        return res.render("createCOmment");
    }

    res.redirect('/auth/login')
};