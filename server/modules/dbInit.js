 module.exports = function () {
	//set up mongoDB connection

	// TODO move it to ENV
	const pass = 'jedenactka';
	const login = 'imanager';
  
  const dbName = `mongodb://${login}:${pass}@ds041566.mlab.com:41566/itemdb`; 
  const mongoose = require('mongoose');
  mongoose.connect(dbName);

  const db = mongoose.connection;
  db.on('error', error => {
    console.log('error on ' + error);
  });
  mongoose.Promise = global.Promise;
};
