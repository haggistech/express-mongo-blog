const Comment = require('../database/models/Comment')

console.log("Comments File")
module.exports = (req, res) => {{
    console.log(req.body)
        Comment.create({
            ...req.body
        }, (error, post) => {
            res.redirect("/");
        });
    }
}