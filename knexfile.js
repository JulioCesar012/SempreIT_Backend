// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "mysql-17812-0.cloudclusters.net",
      user: "juliofilho",
      password: "sempreit2021",
      database: "sempreitfullstack",
      port: 17812,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: "mysql-17812-0.cloudclusters.net",
      user: "juliofilho",
      password: "sempreit2021",
      database: "sempreitfullstack",
      port: 17812,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
