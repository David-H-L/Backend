import dotenv from 'dotenv';
import path from 'path';


const ENV_PATH = path.join(__dirname, '/../../.env')
dotenv.config({path: ENV_PATH});

export const ENV = {
    PORT: process.env.PORT || 3001 ,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || '1234',
    POSTGRES_USER: process.env.POSTGRES_USER || 'root',
    POSTGRES_DB: process.env.POSTGRES_DB || 'backend',
    PGDATA: process.env.PGDATA || '/var/lib/postgresql/data/pgdata',
    PGHOST: process.env.PGHOST || 'localhost',
    PGPORT: process.env.PGPORT || '5433',
    // new data
    JWT_SECRET: process.env.JWT_SECRET || 'asdfg',
    SALTS: process.env.SALTS || '10', // default salts
    SOCKETIO_PORT: process.env.SOCKETIO_PORT || '3001',
    
}