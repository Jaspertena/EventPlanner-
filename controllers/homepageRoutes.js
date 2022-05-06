const router = require("express").Router();
const { Event, Comment, User } = require("../models");
const withAuth = require("../utils/auth.js")

router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findAll({
      include: [User],
    });
    console.log(eventData);
    const events = eventData.map((Event) => Event.get({ plain: true }));
    console.log(events);
    res.render("all-events", { events });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/event/:id", async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        User,
        // {
        //   model: Comment,
        //   include: [User],
        // },
      ],
    });

    if (eventData) {
      const event = eventData.get({ plain: true });
      // insert handlebars file here
      res.render("single-event", { Event });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-event", withAuth, (req, res) => {
  
  // if (req.session.loggedIn) {
  
  //   res.render("new-event");
  //   return;
  // }

  // res.redirect("login");
  res.render("new-event");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/NewEvent");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
