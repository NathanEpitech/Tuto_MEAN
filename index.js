const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = __dirname + '/app/views/';
const db = require("./app/models/db");
const dbConfig = require("./app/config/db.config");

let corsOptions = {
    origin: "http://localhost:8081"
};
app.use(express.static(path));
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


db.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.sendFile(path+ "index.html");
});

require("./app/routes/pangolin.route")(app);
require('./app/routes/auth.route')(app);
require('./app/routes/user.route')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});
