const router = require("express").Router();
const { Job } = require("../models");
const { Op } = require("sequelize");
const withAuth = require("../utils/withAuth");

router.get("/", (req, res) => {
  res.render("about", {
    title: "About us",
    logged_in: req.session.logged_in,
})
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Registration Page" });
});

router.get("/home", withAuth, async (req,res) => {
  res.render('home', {
      title: "Home Page",
      logged_in: req.session.logged_in,
  });
});

router.get("/postjob", withAuth, async (req,res) => {
  res.render('postjob', {
      title: "Post Job",
      logged_in: req.session.logged_in,
  });
}); 

router.get("/jobseeking", withAuth, async (req, res) =>{
  // find all jobs in db
  try {
    const jobPosts = await Job.findAll({
      // where: {
      // change hardcode value to session id
        // user_id: {[Op.ne]: 1}
      // }  
    });  
    const jobs = jobPosts.map((posts) => posts.get({ plain:true}));
    console.log(jobs);
    res.render('job-seeking', {
      jobs,
      title: "Job Seeking",
      logged_in: req.session.logged_in,
    });  
  } catch (error) {
    res.status(500).json(error);
  }
  //serialize jobs so that appropriate values can be displayed
});

router.get("/jobseeking/:id", withAuth, async (req, res) =>{
  try {
      const jobPost = await Job.findByPk(req.params.id);
      if(!jobPost) {
          res.status(404).json({ message: 'No job post exists with this id!'});
          return;
      }        
      //serializes that specific job post 
      const jobDescription = jobPost.get({ plain: true});
      console.log(jobDescription);
      // create a description.handlebars
      res.render('job-details', {
        jobDescription,
        title: "Job Description",
        logged_in: req.session.logged_in,
      });
  } catch (err) {
      res.status(500).json(err)
  }
});

// missing cooking information
router.get("/hiringposts", withAuth, async (req, res) =>{
  try {
    console.log(req.session.userId);
    const jobPosts = await Job.findAll({
      // where: {
      // change hardcode value to session id
        // user_id: req.session.userId
      // }  
    });  
    const jobs = jobPosts.map((posts) => posts.get({ plain:true}));
    res.render('hiring-posts', {
      jobs,
      title: "Job Hiring",
      logged_in: req.session.logged_in,
    });  
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/logout", async (req, res) =>{
  res.render ('about');
})

router.get("/hiringposts/:id", withAuth, async (req, res) => {
  try {
    const jobPost = await Job.findByPk(req.params.id);
    if(!jobPost) {
        res.status(404).json({ message: 'No job post exists with this id!'});
        return;
    }        
    //serializes that specific job post 
    const jobDescription = jobPost.get({ plain: true});
    console.log(jobDescription);
    // create a description.handlebars
    res.render('hiring-detail', {
      jobDescription,
      title: "Hiring Post Page",
      logged_in: req.session.logged_in,
    });
} catch (err) {
    res.status(500).json(err)
}
});

module.exports = router;
