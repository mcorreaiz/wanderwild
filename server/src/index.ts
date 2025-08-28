import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { resolvers, typeDefs } from './schema';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/wanderwild';

async function startServer() {
  await mongoose.connect(MONGO_URI);
  const app = express();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  // @ts-ignore
  server.applyMiddleware({ app: app as any });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
}

startServer().catch(console.error);
