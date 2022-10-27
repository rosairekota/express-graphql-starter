const {gql} = require('apollo-server-express')
const typeDefs  = gql`
type User {
    name: String!,
    age: Int!
    connected: Boolean
}

type Query{
    users:[User!]
    user: User
}

`
module.exports = {
    typeDefs
}