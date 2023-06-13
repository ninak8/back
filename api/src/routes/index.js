const { Router } = require("express");
// Importar todos los routers;
const routerProducts = require("./routerProducts");
const routerColors = require("./routerColors");
const routerTags = require("./routerTags");
const routerSizes = require("./routerSizes");
const routerFilters = require("./filters");

const router = Router();

// Configurar los routers
router.use("/products", routerProducts);
router.use("/filters", routerFilters);

router.use("/colors", routerColors);
router.use("/tags", routerTags);
router.use("/sizes", routerSizes);

module.exports = router;
