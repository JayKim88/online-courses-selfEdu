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
    author: "2",
  },
  {
    id: "33",
    title: "what a day..",
    body: "it was hard dayyyy",
    published: false,
    author: "3",
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

const db = {
  users,
  posts,
  comments,
};

export { db as default };
