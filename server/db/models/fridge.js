const Sequelize = require('sequelize')
const db = require('../db')

const Fridge = db.define('fridge', {
  items: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Fridge
