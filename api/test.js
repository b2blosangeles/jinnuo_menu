let config = {};
try {
	delete require.cache['/var/qalet_config.json'];
	config = require('/var/qalet_config.json');
} catch (err) {}

let cfg0 = config.database.master;

var connection = pkg.mysql.createConnection(cfg0);
connection.connect();
var str = "SELECT * FROM `menu`; ";

connection.query(str, function (error, results, fields) {
  connection.end();
  if (error) {
    res.send({status:'error', value:error.message});
  } else {
    res.send({status:'success1', value:results});
  }
});
