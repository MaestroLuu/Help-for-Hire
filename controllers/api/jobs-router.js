const router = require("express").Router();
const { Job } = require("../../models");
const withAuth = require("../../utils/withAuth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newJob = await Job.create({
      job_name: req.body.job_name,
      description: req.body.description,
      price: req.body.price,
      zipcode: req.body.zipcode,
    });
    if (!req.body.job_name || !req.body.description || !req.body.price) {
      res
        .status(404)
        .json({
          message: "Please make sure you complete the following boxes.",
        });
      return;
    }
    res.status(200).json(newJob);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const jobData = await Job.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
