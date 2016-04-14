import providers from './providers';

const config = {
  providers,

  database: {
    client: 'postgresql',
    connection: {
      database: 'nashjs',
      user:     process.env.USER,
      password: '',
    },
  }
};

if (process.env.DATABASE_URL) {
  config.database.connection = process.env.DATABASE_URL;
}

export default config;
