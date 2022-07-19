const mongoose = require("mongoose");
const Work = require("../models/work");

exports.getAllWorks = async (req, res) => {  
  await Work.find()
    .then((works) => {
      return res.status(200).json(works);
    })
    .catch((err) => res.status(500).json(err));
};

exports.addWork = async (req, res) => {
  const work = new Work({
    _id: mongoose.Types.ObjectId(),
    title: req.body.title,
    desc: req.body.desc,
    link: req.body.link,
    img: req.file.path, 
    progress: req.body.progress
  });

  await work
    .save()
    .then(() =>
      res.status(201).json({ message: "Work added successfuly to database" })
    )
    .catch((error) =>
      res.status(500).json({
        message: "Something went wrong when adding to database",
        error,
      })
    );
};

exports.deleteAll = async (req, res) => {
  await Work.remove({})
  .then(() =>
      res.status(201).json({ message: "Work deleted all successfuly." })
    )
    .catch((error) =>
      res.status(500).json({
        message: "Something went wrong when removing to MongoDB",
        error,
      })
    );
}