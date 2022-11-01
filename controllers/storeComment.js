const Comment = require('../database/models/Comment')
const Post = require('../database/models/Post')

console.log("Comments File")
module.exports = (req, res) => {{
    console.log(req.body)
        Comment.create(req.body, (error, comment) => {
            console.log(res)
            const postRelated = Post.findById(req.body.post);
            console.log(postRelated)
              // push the comment into the post.comments array
           postRelated.comments.push(fdfd65fd4gfd6);
            res.redirect("/");
        });
    }
}