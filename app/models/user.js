var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  defaults : {
  tableName: 'users',
  'username' : 'Phillip',
  'password' : 'Phillip'
  }


});

module.exports = User;