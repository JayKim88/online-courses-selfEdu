import { GraphQLServer } from "graphql-yoga";

// Scalar types - String, Boolean, Int, Float, ID

// Demo user data

const users = [
  { id: "1", name: "Jay", email: "abc@gmail.com", age: 30 },
  { id: "2", name: "June", email: "aaa@gmail.com" },
  { id: "3", name: "Summer", email: "bbb@gmail.com" },
];

const posts = [
  {
    id: "11",
    title: "hello everyone!",
    body: "nice to meet ya",
    published: true,
    author: "1",
  },
  {
    id: "22",
    title: "how are you",
    body: "i'm good these days",
    published: true,
    author: "1",
  },
  {
    id: "33",
    title: "what a day..",
    body: "it was hard dayyyy",
    published: false,
    author: "2",
  },
];

// Type definition(Schema)
const typeDefs = `
   type Query {
     add(numbers: [Float!]!): Float!
     greeting(name: String!, position: String!): String!
     grades: [Int!]!

     users(query: String!): [User!]!
     posts(query: String): [Post!]!
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
       author: User!
   }
`;
// Resolvers
const resolvers = {
  Query: {
    add(_, args) {
      if (args.numbers.length === 0) {
        return 0;
      }
      return args.numbers.reduce((a, b) => {
        return a + b;
      }, 0);
    },
    greeting(parent, args, cts, info) {
      // console.log("parent", parent);
      // console.log("cts", cts);
      // console.log("info", info);

      return `hello! ${args.name}. ${args.position}`;
    },
    grades(_, args) {
      return [100, 50, 59];
    },
    users(_, args) {
      if (!args.query) {
        return users;
      }

      return users.filter((v) =>
        v.name.toLowerCase().includes(args.query.toLowerCase())
      );
    },
    posts(_, args) {
      if (!args.query) return posts;
      console.log(args.query);
      return posts.filter(
        (v) =>
          v.title.toLowerCase().includes(args.query.toLowerCase()) ||
          v.body.toLowerCase().includes(args.query.toLowerCase())
      );
    },
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
  Post: {
    author(parent, args) {
      console.log("parent", parent);
      return users.find((user) => {
        return user.id === parent.author;
      });
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
