/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'logworkout',
  type: 1,
  description: 'logs workout and updates databse with username, length, date, calories (optional)'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "logs workout and updates databse"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
