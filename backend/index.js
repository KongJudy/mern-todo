const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes/ToDoRoute');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To MongoDB...`))
  .catch((err) => console.log(err));

const corsOptions = {
  origin: 'https://jk-mern-todo.vercel.app',
  methods: 'GET, PUT, POST, DELETE'
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
