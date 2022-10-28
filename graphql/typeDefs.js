const {gql} = require('apollo-server-express')
const typeDefs  = gql`
type User {
    id: Int!
    name: String!
    age: Int!
    connected: Boolean
}

type Query{
    users:[User!]
    user(age:Int): User
}
type Mutation {
    createUser( id: Int!, name: String!, age: Int!, connected: Boolean): User!
    updateUser( id: Int!, name: String!, age: Int!, connected: Boolean): [User!]
    deleteUser( id: Int!): [User!]
}
`
module.exports = {
    typeDefs
}