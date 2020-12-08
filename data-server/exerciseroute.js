const route = require("express").Router();

const Exercise = require("./model").ExerciseModel;

route.get("/",async (req, res) => {
  try {
    const found = await Exercise.find();
    res.json(found);
  } catch (err) {
    console.log(err)
  }

});

route.post("/", async (req, res) => {
  const desc = req.body.desc;
  const date = req.body.date;
  const category_id = req.body.category_id;
  const repetition = req.body.repetition;
  const duration = req.body.duration;
  const item = new Exercise({
    desc: desc,
    date: date,
    category_id: category_id,
    duration:duration,
    repetition:repetition
  })
  try {
    const result = await item.save();
    res.json(result);
  } catch (err) {
    console.log(err);
  }

});

route.delete("/:id",async (req, res) => {
  const delID = req.params.id
  try {
    const deletedItem = await Exercise.deleteOne({_id: delID});
    res.json(deletedItem);
  } catch (err) {
    console.log(err)
  }
});

module.exports = route;
