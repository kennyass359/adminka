const PORT = require('../app.js');

const allowedCors = ['https://practicum.yandex.ru', 'https://students-projects.ru', `localhost:${PORT}`];

function cors(app) {
  return (req, res, next) => {
    const { origin } = req.headers;
    if (allowedCors.includes(origin)) {
      res.header('Access-Control-Allow-Origin', '*');
    }
    next();
  };
}

module.exports = cors;