const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const products = {
  "phones": [
    {"id":1,"model":"Apple iPhone 14 Pro Max","description":"128GB Deep Purple","price":"$900", "image":"assets/products/Iphone 15 pro.png"},
    {"id":14,"model":"Apple iPhone 11","description":"128 GB White (MQ233)","price":"$150", "image":"url_to_image_2"},
    {"id":15,"model":"Apple iPhone 11","description":"128 GB White (MQ233)","price":"$550", "image":"url_to_image_3"},
    {"id":18,"model":"Apple iPhone 14 Pro","description":"128GB Deep Purple (MQ0G3)","price":"$1600", "image":"url_to_image_4"}
  ],
  "watches": [
    {"id":3,"model":"Apple Watch Series 9 GPS","description":"41mm Starlight Aluminium","price":"$399", "image":"url_to_image_8"}
  ]
};

// Главная страница
app.get('/', (req, res) => {
  res.send('API работает! Используй /products для получения данных');
});

// Эндпоинт для получения товаров
app.get('/products', (req, res) => {
  res.json(products);
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
