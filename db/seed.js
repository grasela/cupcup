const Cup = require('../cup/Cup')

const cupJason = require('../db/seedFile.json')

const cups = cupJason.map(cup=>{
    cup.price = parseInt(cup.price, 10)
    return new Cup(cup)
})

async function seedCups(){
    await Cup.insertMany(cups)
    console.log('fuck yeah seeded')
}

seedCups()
.catch(err => console.error(err))