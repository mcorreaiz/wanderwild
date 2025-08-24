import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import { typeDefs, resolvers } from './schema';

const MONGO_URI = 'mongodb://localhost:27017/wanderwild'; // Change as needed

async function startServer() {
  await mongoose.connect(MONGO_URI);
  const app: express.Application = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer().catch(console.error);
