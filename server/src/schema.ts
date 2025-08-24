import { gql } from 'apollo-server-express';
import User from './models/User';

export const typeDefs = gql`
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

export const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
  Mutation: {
    addUser: async (_: any, { name, email }: { name: string; email: string }) => {
      const user = new User({ name, email });
      await user.save();
      return user;
    },
  },
};

export default typeDefs;
