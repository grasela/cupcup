const express = require('express')
const Cup = require('./Cup')
const router = express.Router()

// all our cats
router.get('/', (req, res) => {  
    Cup.find()
    .then(cups =>  {
        res.status(200).json(cups)
    }) 
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.post('/', (req, res) => {
    const cup = new Cup(req.body)
    cup.save()
.then(() =>  {
    res.status(201).json(cup)
})
.catch(err => {
    res.status(500).json({err: err.message})
})
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const cup = await Cup.findById(id)
        res.status(200).json(cup)

    } catch(err) {
        res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id 
    Cup.delete(id)
    .then(() => {
        res.status(204).json({
            deleted: true
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err.message
        })
    })
})

module.exports = router

