module.exports = {

    client: 'sqlite3',
    useNullAsDefault: true, // needed for sqlite
    development: {
      connection: {
        filename: './data/companyProjects.db3',
      },
      migrations: {
        directory: './data/migrations'
      },
      seeds: {
        directory: './data/seeds'
      },
      // add the following
      pool: {
        afterCreate: (conn, done) => {
          // runs after a connection is made to the sqlite engine
          conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
        },
      },
    }, 
}