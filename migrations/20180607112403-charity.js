'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('charityTable', {
    id: {
      type: "int",
      length: 11,
      primaryKey: true
    },
    name: {
      type: "string",
      length: 100
    },
    description: {
      type: 'string',
      length: 1000
    },
    img: {
      type: "string",
      length: 500
    },
    url: {
      type: 'string',
      length: 500
    }
  }, callback);
};

exports.down = function(db, callback) {
  db.droptable('charityTable', callback);
};

exports._meta = {
  "version": 1
};
