import { ENV } from './env.config';
import { Sequelize } from 'sequelize';


export const sequelize = new Sequelize(
    ENV.POSTGRES_DB,
    ENV.POSTGRES_USER,
    ENV.POSTGRES_PASSWORD,
    {
        host: ENV.PGHOST,
        port: Number(ENV.PGPORT),
        logging: true,
        dialect: 'postgres',
        define: {
            timestamps: true,
        }
    }
);