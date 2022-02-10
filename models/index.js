const User = require("./User");
const Job = require("./Job");

Job.belongsTo(User, {
    foreignKey: "user_id"
});

// Define sequelize associations in this file.
module.exports = { User, Job };
