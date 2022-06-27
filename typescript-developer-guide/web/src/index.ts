import { User } from "./models/User";

const user = new User({ name: "brand new", age: 4 });

user.save();
