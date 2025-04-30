import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { dbConnect } from './dbConnection/index.js';
import { typeDefsTodos } from './typeDefs/index.js';
import { resolversTodos } from './resolvers/index.js';
import dotenv from 'dotenv'

dotenv.config()

// try to connect DB
dbConnect()

const server = new ApolloServer({
  typeDefs: typeDefsTodos,
  resolvers: resolversTodos
});

const { url } = await startStandaloneServer(server);
console.log(`Server ready at ${url}`);