import { defineConfig } from '@adonisjs/lucid/database'

const databaseConfig = defineConfig({
  connection: 'pg',
  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        user: process.env.DB_USER || 'celiofofo4',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_DATABASE || 'mbi',
      },
      pool: {
        min: Number(process.env.DB_POOL_MIN) || 2,
        max: Number(process.env.DB_POOL_MAX) || 10,
      },
      migrations: {
        table: 'adonis_schema',
        directory: './database/migrations',
      },
    },
  },
})

export default databaseConfig

