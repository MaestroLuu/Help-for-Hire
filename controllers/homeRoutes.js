const router = require("express").Router();
const { User, Jobs } = require("../models");

// use withAuth middleware to redirect from protected routes.
const withAuth = require("../utils/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", (req, res) => {
    res.render("about");
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/users", (req, res) => {
  res.render("users", { title: "Registration Page" });
});

//directs to homepage
router.get("/home", withAuth, async (req,res) => {
    res.render('home', {
        title: "Home Page",
        logged_in: req.session.logged_in,
    });
}); 

//directs to jobs page
router.get("/jobs", withAuth, async (req, res) =>{
    // create a jobs.handlebars
    // create partial cards
    res.render('jobs', {
      Jobs,
      title: "Job Posts",
      logged_in: req.session.logged_in,
    });
});

// directs to job description page
router.get("/jobs/:id", withAuth, async (req, res) =>{
    // create a description.handlebars
    res.render('description', {
      Jobs,
      title: "Job Description",
      logged_in: req.session.logged_in,
    });
});

router.get("/hirer", withAuth, async (req, res) =>{
    // create hiring handlebars
    res.render ('hiring', {
        Jobs, 
        //{where id = user.id}?
        title: "Job Posts",
        logged_in: req.session.logged_in
    });
});

module.exports = router;
