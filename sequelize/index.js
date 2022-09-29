const { Sequelize } = require("sequelize");
require('dotenv').config()

// In a real app, you should keep the database connection URL as an environment variable.
// But for this example, we will just use a local SQLite database.
// const sequelize = new Sequelize(process.env.DB_CONNECTION_URL);
const sequelize = new Sequelize(
	process.env.DATABASE,
	process.env.DBUSER,
	process.env.DBPASS,
	{
		host: process.env.DBHOST,
		dialect: "mysql",
	}
);

const modelDefiners = [
	require("./models/file.model"),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
