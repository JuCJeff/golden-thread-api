'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('donationTable', {
    id: {
      type: "int",
      length: 11,
      primaryKey: true
    },
    datefrom: {
      type: 'date',
      required: true
    },
    amount: {
      type: "int",
      length: 200
    }
  }, callback);
};

exports.down = function (db, callback) {
  db.dropTable('donationTable', callback);
};

exports._meta = {
  "version": 1
};
