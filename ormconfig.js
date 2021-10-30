// eslint-disable-next-line @typescript-eslint/no-var-requires
const SnakeNamingStrategy = require('typeorm-naming-strategies').SnakeNamingStrategy;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'leo',
  database: '2021-10-29-blog-typeorm-column-defaults',
  autoLoadEntities: true,
  synchronize: false,
  entities: ['dist/**/*.model{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
  cli: {
    migrationsDir: 'src/migrations',
  },
};
