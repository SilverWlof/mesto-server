import express from 'express';
import cards from './routes/cards';
import user from './routes/user';
import mongoose from 'mongoose';
import { auth } from './middlewares/auth';

const app = express();
const port = 3000;

app.use(express.json());
app.use(auth);
app.use('/users', user);
app.use('/cards', cards);


const connect = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(`mongodb://127.0.0.1:27017/mestodb`);
    await app.listen(port);
    console.log(`Сервер запущен на порту ${port}`);
  } catch (err) {
    console.log(err);
  }
}

connect();
