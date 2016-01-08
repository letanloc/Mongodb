var Mongodb =require('./connection');
// day la mot coll
// var categories =Mongodb.categories;
var user =Mongodb.user;
// module.exports.getData=function(document,callback){
// 		categories.find().toArray(function(e, res){
// 			callback(null, res);
// 		});
// };

// login

module.exports.login=function(req,callback){
	// console.log(req);
	user.find({
		"userid":req.userid,
		"password":req.password
}).toArray(function(err,res){
	if(err){
		callback(err,null);
	}else {
		if(res.count==0)callback("false",null);
		else
		callback(null,res);
	}
});
};
// thuc hien inser mot user moi
module.exports.CreateNewUser=function(req,callback){
user.insert({
	"userid":req.userid,
	"password":req.password
},function(err,res){
	if(err){
			callback("that bai",null);
	}else  {
		console.log("thanh cong");
				callback(null,res);
	}
});
};
// // get userby userid
//  module.exports.getUserByUserId=function(reg,callback){
//
// 	 	user.find({"userid",req.userid}).toArray(function(err,res){
// 			if(err){
// 				callback(err,null);
// 			}else{
// 				callback(null,res);
// 			}
// 		});
//  };
