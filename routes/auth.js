const express = require("express");
const router = express.Router();

const controller = require("../controllers/auth");

router.post('/add-notes', controller.AddNote)
router.get("/get-notes", controller.getAllNotes);

module.exports = router;
