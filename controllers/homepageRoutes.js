const router = require('express').Router()
const { Event, Comment, User } = require ('../models')


router.get('/', async( req, res ) =>{
    try{
        const eventData = await Event.findAll({
            include : [User],
           
        })

    const events = eventData.map((event) => event.get({ plain: true}));
    //enter the handlebar file name here 
    res.render('',{events});
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/event/:id', async (req,res)=> {
    try{
        const eventData = await Event.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        })

        if (eventData) {
            const event = eventData.get({plain: true})
            // insert handlebars file here
            res.render('', {event})
        } else{
            res.status(404).end();
        }
        
    }
    catch(err) {
        res.status(500).json(err)
    }
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });
  
  module.exports = router;
  
