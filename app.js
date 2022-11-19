const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()

const connectDB = require("./db/connect");
const router = require("./routes/router");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = 5000 ;

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/", router);

app.use(notFound);
app.use(errorHandlerMiddleware);



const start = async() => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log("Server is listening on port " + port);
        });
    } catch (error) {
        console.log(error);
    }
}

start();