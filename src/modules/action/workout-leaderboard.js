/**
 * A Lambda function that replies to interaction with static string
 */

const { globalHandler } = require('../handler.js')

exports.data = {
  name: 'leaderboard',
  type: 1,
  description: 'retrieves leaderboard and posts total amount of time worked out since date given'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "queries database and posts amount of time worked out by user since x date"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}
