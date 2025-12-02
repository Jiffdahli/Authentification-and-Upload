// KORREKTUR: Die crypto.ts-Datei muss importiert werden, damit der darin enthaltene Code
// (insbesondere die selbstausführende Funktion zum Hashen des Passworts) beim Serverstart ausgeführt wird.
import '../backend/utilities/crypto';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import loginRouter from '../backend/router/loginRouter';
import dataRouter from '../backend/router/dataRouter';

const app = express();
const portClient: number = 4400;
const portServer: number = 3000;

app.use(express.json());
app.use(cors({origin: `http://localhost:${portClient}`, credentials: true}));
app.use(cookieParser());

app.use('/login', loginRouter);
app.use('/data', dataRouter);

// Start the server
app.listen(portServer, () => {
    console.log(`Server is running at http://localhost:${portServer}`);
});