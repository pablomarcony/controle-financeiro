import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

require('dotenv').config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  applicationName: process.env.APPLICATION_NAME,
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(<string>process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  autoLoadEntities: true,
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrationsRun: Boolean(process.env.RUN_MIGRATIONS),
  migrationsTableName: 'migration',
  migrations: ["dist/config/migrations/**/*.js"],
  cli: {
    migrationsDir: 'src/config/migrations',
  },
  ssl: false,
  synchronize: Boolean(process.env.SYNCHRONIZE),
  namingStrategy: new SnakeNamingStrategy(),
  retryDelay: 3000,
  retryAttempts: 1000  
}

export default typeOrmConfig;