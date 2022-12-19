const express = require("express");
const router = express.Router();
const publicRoutes = require("../controllers/public");

router.post("/signup", publicRoutes.signup);

module.exports = router;
