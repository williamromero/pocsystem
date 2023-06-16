const mysql = require('mysql');
const mqtt = require('mqtt');

// Configuración de conexión a MySQL
const mysqlConnection = mysql.createConnection({
  host: 'mysql',
  user: 'root',
  port: '3306',
  password: 'pocsystem',
  database: 'pocsystem',
});

// Establecer conexión a MySQL
mysqlConnection.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }
  console.log('Conexión a MySQL establecida correctamente.');
  // Realizar consultas o acciones en MySQL
  // Creación de la tabla "Users"
  const createTable = `
    CREATE TABLE IF NOT EXISTS Users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL
    )
  `;
  mysqlConnection.query(createTable, (error, results) => {
    console.log(results)
  })

  // Ejemplo de consulta
  mysqlConnection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error('Error al realizar la consulta:', error);
      return;
    }
    console.log('Resultado de la consulta:', results);
  });

  // Cerrar conexión a MySQL cuando sea necesario
  // mysqlConnection.end();
});

// Configuración de conexión a MQTT
const mqttClient = mqtt.connect('mqtt://mqtts');

// Eventos de conexión MQTT
mqttClient.on('connect', () => {
  console.log('Conexión a MQTT establecida correctamente.');

  // Publicar un mensaje en un tópico MQTT
  mqttClient.publish('topic', 'Hello, MQTT!');
});

mqttClient.on('message', (topic, message) => {
  console.log('Mensaje recibido:', message.toString());
});

// Suscribirse a un tópico MQTT
mqttClient.subscribe('topic');

// Cerrar conexión MQTT cuando sea necesario
// mqttClient.end();