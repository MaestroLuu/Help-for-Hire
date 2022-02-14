const router = require("express").Router();
const usersRouter = require("./users-router");
const jobsRouter = require("./jobs-router");


router.use("/users", usersRouter);
router.use("/hiringposts", jobsRouter);

module.exports = router;
