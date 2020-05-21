import express  from 'express';
import Routes from './routes';
const app = express();

app.use(express.json());



app.listen(3000);