const { Router } = require("express");
// Importar todos los routers;
const routerProducts = require("./routerProducts");
const routerColors = require("./routerColors");
const routerTags = require("./routerTags");
const routerSizes = require("./routerSizes");
const routerFilters = require("./filters");
const routerFaqs = require("./faqs");
const routerImages = require("./images");
const routerUser = require("./user");

const router = Router();

// Configurar los routers
router.use("/products", routerProducts);
router.use("/filters", routerFilters);

router.use("/colors", routerColors);
router.use("/tags", routerTags);
router.use("/sizes", routerSizes);

router.use("/faqs", routerFaqs);
router.use("/images", routerImages);
router.use("/user", routerUser);

module.exports = router;
