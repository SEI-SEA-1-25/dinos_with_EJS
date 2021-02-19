const models = require('./models')

const makeDino = async () => {
    models.dino.create({
        name: 'Ducky',
        type: 'Parasaurolophus'
    })
}

makeDino();