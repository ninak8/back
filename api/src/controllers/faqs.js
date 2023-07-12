const { Faqs } = require("../db");

const createFAQ = async (question, response) => {
  const createFaq = await Faqs.create({ question, response });
  return createFaq;
};

const allFaqs = async () => {
  const allfaqs = await Faqs.findAll();
  return allfaqs;
};

module.exports = {
  createFAQ,
  allFaqs,
};
