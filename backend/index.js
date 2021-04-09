import express from 'express';
import expressSession from 'express-session'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors'

import { AuthService } from './src/services/auth/AuthService.js';
import { UserService } from './src/services/user/UserService.js';
import { AuthRouter } from './src/routers/auth/AuthRouter.js';
import { UserRouter } from './src/routers/user/UserRouter.js';

import { dbConnector as mysqlConnector, initDb } from './src/config/database-connection.js'


//environment
dotenv.config();
initDb()

const app = express();
const PORT = 8000;


//middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressSession({
    secret: 'youShouldNeverLeak',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));


//init routers & services
const authService = new AuthService(mysqlConnector)
const userService = new UserService(mysqlConnector)
const authRouter = new AuthRouter(authService)
const userRouter = new UserRouter(userService)


//routers setting 
app.use('/auth', authRouter.router());
app.use('/user', userRouter.router())


app.listen(PORT, () => {
    console.log(`link: http://localhost:${PORT}, using '${process.env.NODE_ENV}' as environment`);
})
