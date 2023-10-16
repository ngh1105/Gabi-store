const authRoute = require("../auth/auth.router");
const categoryRoute = require("../auth/category.router");

const initRoutes = (app) => {
    
    app.use("/auth", authRoute);

    app.use("/category", categoryRoute);
}

module.exports = initRoutes;