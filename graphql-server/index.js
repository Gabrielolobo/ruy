const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const resolvers = require('./resolvers');

const app = express();

const BACKEND = 'http://backend:8000/search';

//GraphQL Schema
const typeDefs = gql`
  type Query {
    search(query: String!): [String!]!
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`)
  );
}

startApolloServer().catch((err) => {
  console.error('Error starting Apollo server:', err);
});
