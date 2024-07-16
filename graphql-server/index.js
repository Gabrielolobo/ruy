const { ApolloServer, gql } = require('apollo-server-express');
const axios = require('axios');
const express = require('express');

const app = express();

const BACKEND = 'http://backend:8000/search';
//GraphQL Schema
const typeDefs = gql`
  type Query {
    search(query: String!): [String!]!
  }
`;
//Fetches data from the backend
const resolvers = {
  Query: {
    search: async (_, { query }) => {
      try {
        const response = await axios.get(BACKEND, {
          params: { query },
        });
        return response.data.results;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    },
  },
};

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
