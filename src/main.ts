import express from 'express';
import bodyParser from 'body-parser';
import router from './config/server.routes';
import { ENV } from './config/env.config';
import { sequelize } from './config/database.config';


async function start(){
    try {
        await sequelize.authenticate();

        const PORT = ENV.PORT;

        const app = express();

        app.use(bodyParser.json());

        app.use('/', router)

        app.listen(PORT, () => {
            console.log("Server is running on port " + PORT);
        });
    } catch (error) {
        console.error("Error in server:", error);
    }

}

start();