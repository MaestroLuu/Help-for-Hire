const { User } = require("../../models");
const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email, 
      password: req.body.password
    });
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save(() => res.json({ id: user.id }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});


router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.end();
  });
});

module.exports = router;
