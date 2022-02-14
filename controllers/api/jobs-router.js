const router = require("express").Router();
const { Job } = require("../../models");
// const withAuth = require("../../utils/withAuth");

router.get("/", (req, res) => {
  Job.findAll({}).then((jobData) => res.json(jobData));
});

router.get("/:id", (req, res) => {
  Job.findByPk(req.params.id).then((jobPkData) => res.json(jobPkData));
});

// ADD WITHAUTH LATER ON
router.post("/", async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    if (!req.body.job_name || !req.body.description || !req.body.price || !req.body.zipcode || !req.body.contact_email) {
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

// ADD WITHAUTH LATER ON
router.delete("/:id", async (req, res) => {
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
