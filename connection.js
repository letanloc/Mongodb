var MongoDB =require('mongodb').Db;
var Server  =require('mongodb').Server;

var local  ='localhost';
var dbPort =27017;
var  dbname ="database";


var db  =new MongoDB (dbname,new Server(local,dbPort,{auto_reconnect:true}),{W:1}
);

db.open(function(error,d){

	if(error){

	}else {
		var a;
//		console.log(error? "ssss":"sassa");
			console.log("lien ket thanh cong "+dbname);
//			console.log(a ==1? "hell":"hooo");
	}
});
///
module.exports={
		// collection
		// categories:db.collection('categories')
		user:db.collection('user')

};
