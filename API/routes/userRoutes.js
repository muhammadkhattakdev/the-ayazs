const express = require("express");
const UserModel = require("../models/userModel");


const router = express.Router();


router.post("/login", async (req, res) => {
    const user = await UserModel.findOne()
});




module.exports = router;