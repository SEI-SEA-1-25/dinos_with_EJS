// Required Modules
const express = require('express')
const rowdy = require('rowdy-logger')
const db = require('./models')

// Variables
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)

// Middleware
app.use(express.urlencoded({ extended: false }))
// urlencoded gets the form data from the request and puts it inside of
// req.body

// Routes
app.get('/', (req, res) => {
    res.send('Hello World! From express! For a second time!')
})

// CRUD routes for dinos

// Index (Read All) Route
app.get('/dinos', async (req, res) => {
    try {
        const dinos = await db.dino.findAll()
        res.send(dinos)
    } catch (err) {
        console.log(err)
    }
})

// Show (Show One) Route
app.get('/dinos/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        res.send(dino)
    } catch (err) {
        console.log(err)
    }
})

// Create Route
app.post('/dinos', async(req, res) => {
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

app.put('/dinos/:id', async (req, res) => {
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

app.delete('/dinos/:id', async (req, res) => {
    try {
        const dino = await db.dino.findByPk(req.params.id)
        const deletedDino = await dino.destroy();
        res.send(deletedDino);
    } catch (err) {
        console.log(err)
    }
})


// Start the server!
app.listen(PORT, () => {
    rowdyResults.print()
    console.log(`Server is listening on port ${PORT}`)
})