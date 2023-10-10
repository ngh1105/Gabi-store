const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");

const initRoutes = require("./app/routes");

dotenv.config();

const app = express();

app.use(express.static('public'));

app.use(cors({
    credentials: true, origin: [
        "http://localhost:3000",
        "http://localhost:8000",
    ]
}));

app.use(cookieParser());
app.use(express.json());
app.use(fileUpload({ createParentPath: true }));

// Handle syntax error in request json data
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            message: "Syntax error",
        });
    }

    next();
});

//initDatabase();

initRoutes(app);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

// add new line code