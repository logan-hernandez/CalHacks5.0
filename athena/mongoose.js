'use strict';


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect('mongodb://MegKaw:123@barelybears-shard-00-00-b1dai.mongodb.net:27017,barelybears-shard-00-01-b1dai.mongodb.net:27017,barelybears-shard-00-02-b1dai.mongodb.net:27017/test?ssl=true&replicaSet=BarelyBears-shard-0&authSource=admin&retryWrites=true');

module.exports = function (preferences) {

    var db = mongoose.connect('mongodb://MegKaw:123@barelybears-shard-00-00-b1dai.mongodb.net:27017,barelybears-shard-00-01-b1dai.mongodb.net:27017,barelybears-shard-00-02-b1dai.mongodb.net:27017/test?ssl=true&replicaSet=BarelyBears-shard-0&authSource=admin&retryWrites=true');
	
	mongoose.model('Tutor Preference', preferences);

    return db;
};