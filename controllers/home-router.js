const router = require("express").Router();
const { User, Job } = require("../models");
// const withAuth = require("../utils/withAuth");

router.get("/", (req, res) => {
  res.render("about");
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Registration Page" });
});

// ADD WITHAUTH LATER ON
router.get("/home", async (req,res) => {
  res.render('home', {
      title: "Home Page",
      // logged_in: req.session.logged_in,
  });
}); 

// ADD WITHAUTH LATER ON
router.get("/jobseeking", async (req, res) =>{
  // // find all jobs in db
  // const jobPosts = await Job.findAll({
  //     // attributes: {exclude: req.session.userId},
  // }).catch((err) => {
  //     res.status(500).json(err);
  // });
  // //serialize jobs so that appropriate values can be displayed
  // const jobs = jobPosts.map((posts) => posts.get({ plain:true}));
  
  // create a jobs.handlebars and partial cards for each job post
  res.render('job-seeking', {
    // jobs,
    title: "Job Seeking",
    // logged_in: req.session.logged_in,
  });
});

// directs to job description page
// ADD WITHAUTH LATER ON
router.get("/jobseeking/:id", async (req, res) =>{
  // try {
  //     const jobPost = await Job.findByPk(req.params.id);
  //     if(!jobPost) {
  //         res.status(404).json({ message: 'No job post exists with this id!'});
  //         return;
  //     }        
  //     //serializes that specific job post 
  //     const jobDescription = jobPost.get({ plain: true});
  //     // create a description.handlebars
      res.render('job-details', {
        // jobDescription,
        title: "Job Description",
        // logged_in: req.session.logged_in,
      });
  // } catch (err) {
  //     res.status(500).json(err)
  // }
});

//missing cooking information
// ADD WITHAUTH LATER ON
router.get("/hiringposts", async (req, res) =>{
  // const jobPosts = await Job.findAll({where: {id: req.body.id}}).catch((err) => {
  //     res.status(500).json(err);
  // });
  
  // //serialize jobs so that appropriate values can be displayed
  // const jobs = jobPosts.map((posts) => posts.get({ plain:true}));

  // create hiring handlebars
  res.render ('hiring-posts', {
      // jobs, 
      // where: {id: req.body.id},
      title: "Hiring Posts",
      // logged_in: req.session.logged_in
  });
});

router.get("/logout", async (req, res) =>{
  res.render ('login');
})

router.get("/hiringposts/:id", (req, res) => {
  res.render("hiring-detail");
});

module.exports = router;
