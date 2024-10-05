const express = require("express");
const WorkModel = require("../models/workModel");



const router = express.Router();


router.get("/", async (req, res) => {
    const works = await WorkModel.find();
    res.status(200).json(works);
});

module.exports = router;