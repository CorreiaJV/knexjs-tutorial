// Update with your config settings.

module.exports = {



  development: {
    client: 'mysql',
    connection: {
      database: 'db_treino',
      host: 'localhost',
      user: 'root',
      password: 'senhabanco'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },



};
