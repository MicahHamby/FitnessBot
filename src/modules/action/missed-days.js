/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'misseddays',
  type: 1,
  description: 'updates DB to calculate the number of missed days per week and tabulates fund contribution'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "updates DB to calculate the number of missed days per week and tabulates fund contribution"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
