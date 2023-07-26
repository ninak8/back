const { Router } = require("express");
const router = Router();
const { getImageFileURL } = require("../middlewares/getImageFileURL");

router.post("/", getImageFileURL);

module.exports = router;
