/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'loserboard',
  type: 1,
  description: 'queries loserboard to see who has missed the most days'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "queries loserboard to see who has missed the most days"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
