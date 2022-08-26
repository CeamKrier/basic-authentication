import express from "express";

import { getList } from "../services/listings";

const router = express.Router();

router.get("/", (_, response) => {
    const listings = getList();
    response.send(listings);
});

export default router;
