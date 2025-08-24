const { gql } = require('apollo-server-express');
const User = require('./models/User');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }
  type Query {
    users: [User!]!
  }
  type Mutation {
    addUser(name: String!, email: String!): User!
  }
`;

const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
  Mutation: {
    addUser: async (_, { name, email }) => {
      const user = new User({ name, email });
      await user.save();
      return user;
    },
  },
};

module.exports = { typeDefs, resolvers };
