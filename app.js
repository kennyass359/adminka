const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRouter = require("./routes/main");
const gamesRouter = require("./routes/games");
const cors = require("./middlewares/cors");

const PORT = 3000;

const app = express();

app.use(cors(app), bodyParser.json(), express.static(path.join(__dirname, "public")), mainRouter, gamesRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен на ${PORT} порту`);
});