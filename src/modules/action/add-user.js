const { globalHandler } = require('../handler.js')

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.data = {
  name: 'adduser',
  type: 1,
  description: 'add user into tracking db'
}

const action = async (body) => {
  // May do something here with body
  // Body contains Discord command details
  let response = {
    "content": "add user into tracking db"
  }
  return response
}

exports.handler = (event) => {
  globalHandler(event, action)
}




export const main = async () => {
  const command = new PutCommand({
    TableName: "HappyAnimals",
    Item: {
      CommonName: "Shiba Inu",
    },
  });

  const response = await docClient.send(command);
  console.log(response);
  return response;
};

