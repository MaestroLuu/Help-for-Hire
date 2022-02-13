const { User } = require("../models");

const userData = [
  {
    id: 1,
    password: "password1",
    email: "user1@email.com"
  },
  {
    id: 2,
    password: "password2",
    email: "user2@email.com"
  },
  {
    id: 3,
    password: "password3",
    email: "user3@email.com"
  },
  {
    id: 4,
    password: "password4",
    email: "user4@email.com"
  },
  {
    id: 5,
    password: "password5",
    email: "user5@email.com"
  },
  {
    id: 6,
    password: "password6",
    email: "user6@email.com"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;