const Campsite = require('./models/Campsite');

const resolvers = {
  Query: {
    campsites: async () => {
      return await Campsite.find();
    },
  },
};

module.exports = resolvers;
