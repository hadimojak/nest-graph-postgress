import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export default defineConfig({
  driver: PostgreSqlDriver,
  dbName: 'hadi',
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  host: 'ep-bold-poetry-a1imsnds-pooler.ap-southeast-1.aws.neon.tech',
  user: 'neondb_owner',
  password: 'npg_ilnHJqNBY7s4',
  port: 5432,
  driverOptions: {
    connection: {
      ssl: {
        rejectUnauthorized: false, // allows self-signed certificates
      },
    },
  },
});
