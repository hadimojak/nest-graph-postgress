import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default defineConfig({
  driver: PostgreSqlDriver,
  dbName: 'hadi',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  host: '127.0.0.1',
  user: 'mojak',
  password: 'mojak2525',
  port: 5432,
  driverOptions: {
    connection: {
      ssl: false,
    },
  },
});
