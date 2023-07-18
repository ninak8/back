const { Router } = require("express");
const router = Router();
const { allFaqs, createFAQ, removeFaqs } = require("../controllers/faqs");

router.post("/", async (req, res) => {
  const { response, question } = req.body;
  try {
    const faq = await createFAQ(question, response);
    res.status(200).json(faq);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allfaqs = await allFaqs();
    res.status(200).json(allfaqs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const faqDelet = await removeFaqs(id);
    res.status(200).json(faqDelet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
