const { User } = require("../models");

const userData = [
  {
    id: 1,
    password: 123,
    email: "user1@email.com"
  },
  {
    id: 2,
    password: 123,
    email: "user2@email.com"
  },
  {
    id: 3,
    password: 123,
    email: "user3@email.com"
  },
  {
    id: 4,
    password: 123,
    email: "user4@email.com"
  },
  {
    id: 5,
    password: 123,
    email: "user5@email.com"
  },
  {
    id: 6,
    password: 123,
    email: "user6@email.com"
  },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;