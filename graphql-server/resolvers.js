const axios = require('axios');

const resolvers = {
    Query: {
      search: async (_, { query }) => {
        try {
          //
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
  