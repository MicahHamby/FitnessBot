/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'weeeklyudpate',
  type: 1,
  description: 'posts the weekly update which includes workout totals, missed days, fund contribution'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "posts the weekly update which includes workout totals, missed days, fund contribution"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
