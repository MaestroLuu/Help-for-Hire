const { User } = require("../../models");
const router = require("express").Router();

// Would this be with users? or vice versa? Remember
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("Email not found.");
    }
    const isValidPassword = await user.checkPassword(password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    req.session.save(() => {
      req.session.logged_in = true;
      req.session.userId = user.id;
      res.json({id: user.id})
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "Invalid email or password.",
    });
  }
});

module.exports = router;