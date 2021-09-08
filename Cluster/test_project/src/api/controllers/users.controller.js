const DBC = require('../../../db/connection');

module.exports = {
  getUsers: async (req, res, next) => {
    try {
      const result = await DBC.query('SELECT * from users');
      return res.json({message: 'retrieved users', result});
    } catch (error) {
      console.log(error); 
      return res.status(500).send("Error");
    }
  },

  createUser: async (req, res, next) => {
    try {
      await DBC.query("insert into users (`name`, `gender`) values ('name', 'm')");
      console.log(`Worker (message): Worker ${process.pid} has created a new user`);
      process.send({ message: 'User created', process: process.pid});
      return res.json({message: 'User created'});
    } catch (error) {
      console.log(error);
      return res.status(500).send("Error");
    }
  },

  updateUser: async (req, res, next) => {
    try {
      await DBC.query("update users set gender = 'f' where id = 1");
      console.log(`Worker (message): Worker ${process.pid} has updated an user`);
      process.send({ message: 'User updated', process: process.pid});
      res.json({message: 'User updated'});
      console.log(`Worker (exit): Worker ${process.pid} has finished his work`);
      process.exit();
    } catch (error) {
      return res.status(500).send("Error");
    }
  }
}