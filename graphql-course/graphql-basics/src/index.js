import { GraphQLServer } from "graphql-yoga";
import { v4 as uuidv4 } from "uuid";

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

const comments = [
  {
    id: "101",
    text: "wowowowow!",
    author: "3",
    post: "11",
  },
  {
    id: "102",
    text: "heyheyhey!",
    author: "1",
    post: "22",
  },
  {
    id: "103",
    text: "it's a raining day!",
    author: "2",
    post: "33",
  },
  {
    id: "104",
    text: "cheer up bro!!!",
    author: "1",
    post: "22",
  },
];

// Type definition(Schema)
const typeDefs = `
   type Query {
     add(numbers: [Float!]!): Float!
     greeting(name: String!, position: String!): String!
     grades: [Int!]!
     users(query: String): [User!]!
     posts(query: String): [Post!]!
     me: User! 
     post: Post!
     comments: [Comment!]!
   }

   type Mutation { 
      createUser(data: CreateUserInput!): User!
      createPost(
        data: CreatePostInput!
      ): Post!
      createComment(
        data: CreateCommentInput!
      ): Comment!
   }

   input CreateUserInput {
    name:String! 
    email: String!
    age: Int
   }

   input CreatePostInput {
    title: String!
    body: String!
    published: Boolean
    author: ID!
   }

   input CreateCommentInput {
    text: String!
    author: ID!
    post: ID!
   }

   type User {
       id: ID!
       name: String!
       email: String!
       age: Int
       posts: [Post!]!
       comments: [Comment!]!
   }

   type Post {
       id: ID!
       title: String!
       body: String!
       published: Boolean!
       author: User!
       comments: [Comment!]
   }

   type Comment {
     id: ID!
     text: String!      
     author: User!
     post: Post!
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
    comments(parent, args, ctx, info) {
      return comments;
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
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some((user) => user.email === args.email);

      if (emailTaken) throw new Error("Email Already taken");

      const user = {
        id: uuidv4(),
        ...args,
      };

      users.push(user);
      return user;
    },
    createPost(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);

      if (!userExists) throw new Error("User Not Found");

      const post = {
        id: uuidv4(),
        ...args.data,
      };

      posts.push(post);
      return post;
    },
    createComment(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);
      const postExists = posts.some(
        (post) => post.id === args.data.post && post.published
      );

      if (!userExists) throw new Error("user Not Found");
      if (!postExists) throw new Error("post Not Found");

      const comment = {
        id: uuidv4(),
        ...args.data,
      };
      comments.push(comment);
      return comment;
    },
  },
  Post: {
    author(parent, args) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    post(parent, args) {
      return posts.find((post) => post.id === parent.post);
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
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
