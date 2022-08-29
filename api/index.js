import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

import ListingsRoute from "./routes/listings";

const server = express();
const port = 9009;

server
    .disable("x-powered-by")
    .use(cors())
    .use(compression())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use("/api/listings", ListingsRoute);

server.listen(port, () => {
    console.log(`The API is up and running at the port ${port}`);
});
