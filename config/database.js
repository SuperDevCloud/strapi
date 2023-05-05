module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST'),
      port: env.int('DATABASE_PORT'),
      database: env('DATABASE_DB_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool(true),
    },
    pool: { min: 0, max: 10 }
  },
});
