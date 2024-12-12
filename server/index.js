const fs = require('node:fs')
const path = require('node:path');
const pool = require('./config/db');
const express = require("express"); //Строка 1
const cors = require('cors')
const app = express(); //Строка 2
const router = express.Router();
const controller = require('./controllers/controller')
const port = process.env.PORT || 5100; //выбор порта
app.use(cors());
app.use(express.json());

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database:', res.rows);
  }
});
// Сообщение о том, что сервер запущен и прослушивает указанный порт
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6

// Создание GET маршрута
app.get("/express_backend", (req, res) => {
  //Строка 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Строка отпраавленная на клиент
}); //Строка 11
/*app.post('/form', (req, res) => {
  console.log(req.body);
  const filePath = path.join(__dirname, 'database.json');
  fs.writeFile(filePath, JSON.stringify(req.body, null, 2), error => {
    if (error) {
      console.error(error);
    }
  })
  // Здесь логика обработки пробного POST-запроса с записью в файл
});*/
app.post('/guests', (req, res) => {
  const { name, email, mobileNumber, orderType } = req.body;

  pool.query('INSERT INTO guests (name, email, phone_number, order_type) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, mobileNumber, orderType], (err, result) => {
    if (err) {
      res.send({ express: 'Проблемы с сервером, пожалуйста отправьте форму повторно' })
      return console.error(err.message);
    } else {
      console.log({ express: 'Ваш запрос доставлен' })
      res.send({ express: 'Ваш запрос доставлен' })
    };
  })

});
/*router.post('/form', controller.createUser);
module.exports = router;*/ //здесь логика маршрутизации, пока в разработке 