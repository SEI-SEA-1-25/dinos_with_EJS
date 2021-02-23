const router = require('express').Router()
const db = require('../models')

// CRUD routes for dinos
// Index (Read All) Route
router.get('/', async (req, res) => {
    try {
        const dinos = await db.dino.findAll({ raw: true })
        console.log(dinos)
        res.render('dinos/index', { dinos })
    } catch (err) {
        console.log(err)
    }
})

// Show (Show One) Route
router.get('/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        res.send(dino)
    } catch (err) {
        console.log(err)
    }
})

// Create Route
router.post('/', async(req, res) => {
    try {
        // console.log(req.body);
        const newDino = await db.dino.create({
            name: req.body.name,
            type: req.body.type
        })
        res.send(newDino);
    } catch(err) {
        console.log(err)
    }
})

// Update route
router.put('/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        const updatedDino = await dino.update({
            name: req.body.name,
            type: req.body.type
        })
        res.send(updatedDino)
    } catch (err) {
        console.log(err)
    }
})

// Delete route
router.delete('/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        const deletedDino = await dino.destroy();
        res.send(deletedDino);
    } catch (err) {
        console.log(err)
    }
})

module.exports = router