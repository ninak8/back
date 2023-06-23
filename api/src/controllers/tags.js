const { Tag } = require("../db");

const createTag = async (name) => {
  const newTag = await Tag.create({ name });
  return newTag;
};
const getAllTags = async () => {
  const allTags = await Tag.findAll();
  return allTags;
};
const deleteTag = async (id) => {
  const removeTag = await Tag.findByPk(id);
  await removeTag.destroy();
  return removeTag;
};

module.exports = {
  createTag,
  getAllTags,
  deleteTag,
};