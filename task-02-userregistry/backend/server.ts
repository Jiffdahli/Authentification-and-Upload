import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import loginRouter from './router/loginRouter';
import dataRouter from './router/dataRouter';

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