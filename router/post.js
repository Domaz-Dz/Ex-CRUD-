const router = require("express").Router();
const postSchema = require("../models/post");
router.post("/user", async (req, res) => {
  const { user, age, email } = req.body;
  const newUser = postSchema({ user, age, email });
  const userSave = await newUser.save();
  if (userSave) res.status(201).json(userSave);
});
router.get("/users", async (req, res) => {
  const getUsers = await postSchema.find();
  if (getUsers) res.status(200).json(getUsers);
});
router.patch("/user/:id", async (req, res) => {
  const { user, email, age } = req.body;
  const _id = req.params.id;
  const upUser = await postSchema.findByIdAndUpdate(
    { _id },
    { user, email, age },
    { new: true }
  );
  if (upUser) res.json(upUser);
});
router.delete("/user/:id", async (req, res) => {
  const _id = req.params.id;
  const deletUser = await postSchema.deleteOne({ _id });
  if (deletUser) res.send(`user ${_id} has been deleted`);
});
module.exports = router;
