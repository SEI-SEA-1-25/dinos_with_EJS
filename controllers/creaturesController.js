const router = require("express").Router();
const db = require("../models");

// all creatures
router.get("/", async (req, res) => {
  try {
    const creatures = await db.creature.findAll({ raw: true });
    res.render("creatures/index", { creatures });
  } catch (err) {
    console.log(err);
  }
});

// new creature form route
router.get("/new", (req, res) => {
  res.render("creatures/new");
});

// Show (Show One) Route
router.get("/:id", async (req, res) => {
  try {
    const creature = await db.creature.findByPk(req.params.id, { raw: true });
    res.render("creatures/show", { creature });
  } catch (err) {
    console.log(err);
  }
});

// new creature
router.post("/", async (req, res) => {
  try {
    // console.log(req.body);
    const newCreature = await db.creature.create({
      type: req.body.type,
      img_url: req.body.img_url,
    });
    res.redirect(`/creatures/${newCreature.id}`);
  } catch (err) {
    console.log(err);
  }
});

router.put('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id)
        const updatedCreature = await creature.update({
            name: req.body.name,
            type: req.body.type
        })
        res.redirect(`/creatures/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }
})

// Delete route
router.delete('/:id', async (req, res) => {
    try {
        const creature = await db.creature.findByPk(req.params.id)
        const deletedCreature = await creature.destroy();
        res.redirect("/creatures");
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
