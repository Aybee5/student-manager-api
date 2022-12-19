const database = require("../db");

exports.getAllNotes = (req, res) => {
  database
    .select()
    .from("notes")
    .then((notes) => {
      res.status(200).json({ notes, status: "ok" });
    });
};

exports.AddNote = (req, res) => {
  database("notes")
    .insert({
      title: req.title,
      description: req.description,
      author: req.author,
    })
    .then((result) => {
      console.log(result);
      res.status(201).json({ msg: "Done" });
    })
    .catch((err) => {
      res.status(500).json({ msg: err.message });
    });
};
