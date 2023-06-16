// const mysql = require('mysql');

// // Configuración de la conexión a MySQL
// const mysqlConnection = mysql.createConnection({
//   host: 'mysql',
//   user: 'root',
//   port: '3306',
//   password: 'resolvit-poc-system',
//   database: 'resolvit',
// });

// // Creación de la tabla "Users"
// const createTable = `
//   CREATE TABLE IF NOT EXISTS Users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL
//   )
// `;

// // Exportar función para crear la tabla
// module.exports = function createUsersTable() {
//   mysqlConnection.query(createTable, (error, results) => {
//     if (error) {
//       console.error('Error al crear la tabla:', error);
//       return;
//     }
//     console.log('La tabla "Users" ha sido creada correctamente.');
//   });
//   // Cerrar conexión a MySQL cuando sea necesario
//   mysqlConnection.end();  
// };
