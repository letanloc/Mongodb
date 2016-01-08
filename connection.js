var MongoDB =require('mongodb').Db;
var Server  =require('mongodb').Server;

var local  ='localhost';
var dbPort =27017;
var  dbname ="database";


var db  =new MongoDB (dbname,new Server(local,dbPort,{auto_reconnect:true}),{W:1}
);

db.open(function(error,d){

	if(error){
		console.log(error+"");
	}else {
			console.log("lien ket thanh cong "+dbname);
	}
});
///
module.exports={
		// collection
		// categories:db.collection('categories')
		user:db.collection('user')

};
