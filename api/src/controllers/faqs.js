const { Faqs } = require("../db");

const createFAQ = async (question, response) => {
  const createFaq = await Faqs.create({ question, response });
  return createFaq;
};

const allFaqs = async () => {
    const allfaqs = await Faqs.findAll();
    return allfaqs;
  },
  removeFaqs = async (id) => {
    const removefaqByID = await Faqs.findByPk(id);
    await removefaqByID.destroy();
    return removefaqByID;
  };

module.exports = {
  createFAQ,
  allFaqs,
  removeFaqs,
};
