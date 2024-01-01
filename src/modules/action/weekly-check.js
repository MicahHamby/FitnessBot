/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'weeklycheck',
  type: 1,
  description: 'preforms check against db to ensure 4 days were logged by users opted-into tracking'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "preforms check against db to ensure people worked out"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
