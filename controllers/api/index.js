const router = require("express").Router();
const usersRouter = require("./users-router");
const loginRouter = require("./login-router");
const jobsRouter = require("./jobs-router");
const hiringRouter = require("./hiring-router")

router.use("/users", usersRouter);
router.use("/login", loginRouter);
router.use("/jobs", jobsRouter);

module.exports = router;
