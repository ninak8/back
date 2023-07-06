const { Tag } = require("../db");

const createTag = async (name) => {
  const newTag = await Tag.create({ name });
  return newTag;
};
const getAllTags = async () => {
  const allTags = await Tag.findAll();
  // const tags = allTags.map((tag) => tag.name);
  return allTags;
};

const changeTags = async (id, name) => {
  const tagById = await Tag.findByPk(id);
  const changeTag = await tagById.update({
    name: name,
  });
  return changeTag;
};

const deleteTag = async (id) => {
  const removeTag = await Tag.findByPk(id);
  await removeTag.destroy();
  return removeTag;
};

module.exports = {
  createTag,
  getAllTags,
  changeTags,
  deleteTag,
};
