const { Router } = require("express");
// Importar todos los routers;
const routerProducts = require("./routerProducts");
const routerColors = require("./routerColors");
const routerTags = require("./routerTags");
const routerSizes = require("./routerSizes");
const routerFilters = require("./routerFilters");
const routerFaqs = require("./routerFaqs");
const routerImages = require("./routerImages");
const routerUser = require("./routerUser");

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
