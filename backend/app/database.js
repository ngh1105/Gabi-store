const Sequelize = require("sequelize");

const sequelize = new Sequelize("gabi_store", "root", "", {
    dialect: "mysql",
    host: "localhost",
});

const initDatabase = () => {
    sequelize.sync()
    .then(result => {
        console.log("Connected to database");
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = initDatabase;