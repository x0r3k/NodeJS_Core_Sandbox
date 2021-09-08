const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

class MysqlORM {
  constructor(config) {    
    this.config = config;
    let pool = mysql.createPool(config);
    this.pool = pool;
  };

  createTables() {
    fs
    .readdirSync(__dirname + '/models')
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file.slice(-4) === '.sql');
    })
    .forEach(item => {
      const sqlScript = fs.readFileSync(__dirname + `/models/${item}`).toString();
      this.pool.query(sqlScript);
      console.log(`Table "${item.replace(/\d+_/, '').slice(0, -4)}" creation script was invoked`);
    });
  };

  async dropAllTables() {
    const tables = await this.getTableList();
    if(!tables.length) return;
    //UNSAFE METHOD
    await this.pool.query('SET FOREIGN_KEY_CHECKS = 0');
    await Promise.all(tables.map(table => this.pool.query(`drop table if exists ${this.generateSqlTableName(table)}`)));
    await this.pool.query('SET FOREIGN_KEY_CHECKS = 1');
  };

  async dropTable(table) {
    try {
      await this.pool.query(`drop table if exists ${this.generateSqlTableName(table)}`);
    } catch (error) {
      console.log(error); 
    }
  };

  async getTableList() {
    await this.pool.query(`use ${this.config.database}`);
    let [tables, ] = await this.pool.query('show tables');
    tables = tables.map(item => item[`Tables_in_${this.config.database}`]);
    // console.log(tables);
    this.tables = tables;
    return tables;
  };

  async query(queryString) {
    try {
      let [result, ] = await this.pool.query(queryString);
      return result;
    } catch (error) {
      throw error;
    }
  }

  generateSqlTableName(table) {
    return `${this.config.database}.${table}`
  }

  getPool() {
    return this.pool;
  };

  async checkConnection() {
    await this.pool.query('SELECT 1+1 AS result');
  };

  pool;
  config = {};
  tables = [];
}

module.exports = MysqlORM;