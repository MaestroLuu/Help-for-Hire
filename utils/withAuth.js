const withAuth = (req, res, next) => {
  // Proceed to next middelware/route handler if user is logged in
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
