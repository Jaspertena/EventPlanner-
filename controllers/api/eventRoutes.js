// api routes for events
const router = require("express").Router();
const { Event } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {

    const { name, description, event_start, event_end, location, cost, link } = req.body;
    const newEvent = await Event.create({
      name,
      description,
      event_start,
      event_end,
      location,
      cost,
      link,
      user_id: req.session.user_id,
    });
    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = Event.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
