
require('dotenv').config()
const {typeDefs} = require("./graphql/typeDefs.js")
const {resolvers} = require("./graphql/resolvers.js")
const { ApolloServer} = require('apollo-server-express')
const express = require('express');
const port = process.env.PORT||4000
const app = express();
const cors = require('cors')

// require appo

const startApolloServer = async ()=>{
    const server = new ApolloServer({typeDefs,resolvers})
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    
    app.listen(port, () => {
    console.log(`http://localhost:${port}`)
    })
}
startApolloServer()