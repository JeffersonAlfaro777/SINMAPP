import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: "localhost",
  port: 3306,
  user: "userRoot",
  password: "userRoot",
  database: "sinma",
});

export const dbConnection = async () => {
  try {
    return await pool.getConnection();
  } catch (err) {
    console.log(err);
    throw new Error(
      `No se ha podido establecer la conexión al servidor con base de datos `
    );
  }
};
