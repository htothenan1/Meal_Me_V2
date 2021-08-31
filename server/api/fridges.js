const router = require('express').Router()
const {Fridge} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const fridges = await Fridge.findAll({
      attributes: ['items', 'userId']
    })
    res.json(fridges)
  } catch (err) {
    next(err)
  }
})
