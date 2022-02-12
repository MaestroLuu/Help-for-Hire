const { Job } = require('../models');


const jobData = [
  {
    id: 1,
    job_name: "Move Boxes",
    description: "Move this box 1 inch for me",
    price: 99,
    zipcode: 11111,
    user_id: 1,
    contact_email: "job1@email.com",
  },
  {
    id: 2,
    job_name: "Walk my child",
    description: "Child needs walking for 30 mins",
    price: 199,
    zipcode: 22222,
    user_id: 2,
    contact_email: "job2@email.com",
  },
  {
    id: 3,
    job_name: "Drive my car",
    description: "Need to drive my car once a week",
    price: 50,
    zipcode: 33333,
    user_id: 3,
    contact_email: "job4@email.com",
  },
  {
    id: 4,
    job_name: "Mow my lawn",
    description: "Too lazy to mow my lawn, mow it for me",
    price: 20,
    zipcode: 44444,
    user_id: 4,
    contact_email: "job4@email.com",
  },
  {
    id: 5,
    job_name: "Water my lawn",
    description: "Grass is brown, please water it",
    price: 15,
    zipcode: 55555,
    user_id: 5,
    contact_email: "job5@email.com",
  },
  {
    id: 6,
    job_name: "Fix my bike",
    description: "Bike doesn't work, fix it please",
    price: 200,
    zipcode: 66666,
    user_id: 6,
    contact_email: "job6@email.com",
  },
];

const seedJobs = () => Job.bulkCreate(jobData);

module.exports = seedJobs;