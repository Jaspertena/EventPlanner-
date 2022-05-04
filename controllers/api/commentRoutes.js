// api routes for comments
const router = require('express').Router();
const { Comment } = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      commenter_ID: req.session.user_id,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.put('/:id', withAuth, async(req, res) => {
    try{
       const existingComment = await Comment.update(req.body, {
           where: {
               id: req.params.id,
           }
       }) 
       if (existingComment > 0) {
           res.status(200).end();
       } else {
           res.status(404).end();
       }
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const existingComment = Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (existingComment > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
