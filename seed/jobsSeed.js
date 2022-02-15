const { Job } = require('../models');


const jobData = [
  {
    id: 1,
    job_name: "Mow my lawn",
    description: "Too lazy to mow my lawn, mow it for me",
    price: 20.99,
    zipcode: 92111,
    user_id: 1,
    contact_email: "job1@email.com",
    time: '12:07'
  },
  {
    id: 2,
    job_name: "Water my lawn",
    description: "Grass is brown, please water it",
    price: 15.99,
    zipcode: 91914,
    user_id: 2,
    contact_email: "job2@email.com",
    time: '11:17'
  },
  {
    id: 3,
    job_name: "Fix my bike",
    description: "Bike chain is broken",
    price: 199.99,
    zipcode: 91325,
    user_id: 3,
    contact_email: "job3@email.com",
    time: '2:28'
  },
];

const seedJobs = () => Job.bulkCreate(jobData);

module.exports = seedJobs;