const fs = require('node:fs')
const path = require('node:path');
const express = require("express"); //Строка 1
const cors = require('cors')
const app = express(); //Строка 2
const port = process.env.PORT || 5000; //Строка 3
app.use(cors());
app.use(express.json());

// Сообщение о том, что сервер запущен и прослушивает указанный порт
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6

// Создание GET маршрута
app.get("/express_backend", (req, res) => {
  //Строка 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" }); //Строка 10
}); //Строка 11
app.post('/form', (req, res) => {
  console.log(req.body);
  const filePath = path.join(__dirname, 'database.json');
  fs.writeFile(filePath, JSON.stringify(req.body, null, 2), error => {
    if (error) {
      console.error(error);
    }
  })
  // Здесь логика обработки POST-запроса
});