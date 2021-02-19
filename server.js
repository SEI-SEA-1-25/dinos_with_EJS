// Required Modules
const express = require('express')

// Variables
const app = express();
const PORT = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Hello World! From express! For a second time!')
})




app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})