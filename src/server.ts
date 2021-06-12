import express from 'express';
import './database';

import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.get('/', (request, response) => { 
    return response.status(200).json({ message:'Ola Mundo!!' })
});

app.post('/user', (request, response) => {
    const { name } = request.body;
    return response.json({ message: `Usuário salvo com sucesso! ${ name }`})
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));