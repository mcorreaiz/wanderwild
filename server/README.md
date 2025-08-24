# Wanderwild Backend

This backend module uses ExpressJS, Apollo Server for GraphQL, MongoDB for storage, and Mongoose as the ODM. It provides a basic setup with a sample model and GraphQL schema.

## Features
- ExpressJS server
- Apollo Server integration
- MongoDB connection
- Mongoose ODM
- Sample User model and GraphQL schema

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```

## Configuration
- Update the MongoDB connection string in `src/index.ts` as needed.

## Folder Structure
- `src/index.ts`: Main server entry point
- `src/models/User.ts`: Sample Mongoose model
- `src/schema.ts`: GraphQL schema and resolvers

---
Replace sample code with your own models and resolvers as needed.
