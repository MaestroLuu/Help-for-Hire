const session = require("express-session");
const sequelize = require("./connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

if (!process.env.SECRET) {
  throw new Error("SECRET environmental variable must be set.");
}

// Configure session options
const sess = {
  secret: process.env.SECRET,
  cookie: {
    // cookies expire after 1 day (time in milliseconds)
    maxAge: 8.64e7
  },
  resave: false,
  // Wait to save session until the user logs in
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Exports session middleware. Import and pass to app.use() at startup.
module.exports = session(sess);
