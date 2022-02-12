const { User } = require("../../models");
const router = require("express").Router();

// create new user
router.post("/", async (req, res) => {
  // const { email, password } = req.body;
  try {
    const user = await User.create({
       email: req.body.email,
       password: req.body.password ,
    });
    
    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.userId = user.id;
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Log-in
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("User not found.");
    }
    const isValidPassword = await user.checkPassword(password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    
    req.session.save(() => {
      req.session.isLoggedIn = true;
      req.session.userId = user.id;
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid email or password." });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
  });
  res.redirect("/");
});

module.exports = router;
