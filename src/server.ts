import { http } from './http';
import './websocket/client';

import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;

http.listen(PORT, () => console.log(`Server is running on port ${PORT}`));