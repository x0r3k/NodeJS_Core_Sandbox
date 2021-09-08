const MysqlORM = require('./index');
require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

let DBC = new MysqlORM(config);

module.exports = DBC;