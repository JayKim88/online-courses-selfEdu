import { GraphQLServer } from "graphql-yoga";

// Scalar types - String, Boolean, Int, Float, ID

// Type definition(Schema)
const typeDefs = `
   type Query {
     me: User! 
     post: Post!
   }

   type User {
       id: ID!
       name: String!
       email: String!
       age: Int
   }

   type Post {
       id: ID!
       title: String!
       body: String!
       published: Boolean!
   }
`;
// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: "abc1234",
        name: "Jay Kim",
        email: "hello@google.com",
        age: 30,
      };
    },
    post() {
      return {
        id: "abc1234",
        title: "Welcome to GraphQL!",
        body: "Let's Learn GraphQL!",
        published: true,
      };
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("server is working!");
});
