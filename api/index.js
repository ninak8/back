const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { PORT } = process.env;

server.listen(PORT, () => {
  console.log("tamo activo en el puerto 3001");
  conn.sync({ alter: false });
  // conn.sync({ force: true });
});
