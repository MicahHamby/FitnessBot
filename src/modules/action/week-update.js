/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'weekstatus',
  type: 1,
  description: 'gives the current week status'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "current week status lives here"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
