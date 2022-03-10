import db from "../db/connections.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  await db.dropDatabase();

  const user1 = new User({
    name: 'Tyrus0x',
    email: 'tyrushenry@gmail.com',
    password_digest: await bcrypt.hash('!Hk273LoftQ7', 11),
    task_list: [
      {
        name: "test task",
        description: "this is a task used for testing :)",
        completed: false
      },
      {
        name: "finish project",
        description: "boolslidfjosdjfosjdo",
        completed: false
      }
    ]
  })
  await user1.save()

  const user2 = new User({
    name: 'Tyrus1x',
    email: 'tyrushenry1@gmail.com',
    password_digest: await bcrypt.hash('wonton', 11),
    task_list: [
      {
        name: "this should be on user 2",
        description: "this is a task used for testing :(",
        completed: false
      }
    ]
  })
  await user2.save()

  const user3 = new User({
    name: 'Joe Joeson',
    email: 'mrman@gmail.com',
    password_digest: await bcrypt.hash('Password!?', 11),
    shopping_cart: [
    ]
  })
  await user3.save()

  db.close();
}

insertData()
