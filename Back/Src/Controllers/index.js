require('dotenv').config();
const axios = require('axios');
const router = require('../routes');
const { Products, User, Entry } = require('../db');

 // /-/-/-/-/-/ Para botener los usuarios de nuestra db
const dbDataUser = async () => {
    try {
      const dbDataUser = await User.findAll({});
      return dbDataUser;
    } catch {
      return 'No created user founded';
    }
  };

const dbProducts = async () => {
    try {
        const dbProducts = await Products.findAll({});
        return dbProducts;
    } catch (error) {
        console.log('ERROR ->', error)
    }
}

const dbEntrys = async () => {
    try {
        const dbEntrys = await Entry.findAll({});
        return dbEntrys;
    } catch (error) {
        console.log('ERROR ->', error)
    }
}

module.exports = {
    dbDataUser,
    dbProducts,
    dbEntrys,
  };