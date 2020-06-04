import express from 'express';
import { resolve } from 'path';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));

const PORT = process.env.PORT || 3333;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
