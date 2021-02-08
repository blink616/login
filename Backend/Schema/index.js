const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type User {
  _id: ID!
  username:String!
  email: String!
  password: String
}

input UserInput {
  username: String!
  email: String!
  password: String!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}
type RootMutation {
    createUser(userInput: UserInput): User
   
}
type RootQuery{
login(email: String!, password: String!): AuthData!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);