const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the user to the login page
    if (req.baseUrl.match(/^\/api/)) {
      return res.status(401).json({ message: "Unauthorized. Please log in." });
    }
    
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, execute the next route
      next();
    }
  };
  
  module.exports = withAuth;
  