import { mongoMigrateCli } from 'mongo-migrate-ts';
import 'dotenv/config';

mongoMigrateCli({
  database: 'tester',
  migrationsDir: './src/shared/migrations',
  uri: process.env.MONGO_URI,
  migrationsCollection: 'migrations',
});
