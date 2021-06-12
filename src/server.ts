import express from 'express';
import './database';
import { routes } from './routes';

import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));