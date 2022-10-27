
const {typeDefs} = require("./graphql/typeDefs.js")
const {resolvers} = require("./graphql/resolvers.js")
const { ApolloServer} = require('apollo-server-express')
const express = require('express');
require('dotenv').config()
const port = process.env.PORT||4000
const app = express();
const cors = require('cors')

// require appo

const server = new ApolloServer({typeDefs,resolvers})
server.applyMiddleware({app})
app.use(cors())
app.listen(port,()=>{
 console.log(`http://localhost:${port}`)
})