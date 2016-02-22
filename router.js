// tao lien ket vơi manager
 var  Manager =require("./manager")

module.exports=function(app){


  function createJsonResult(stt,msg,res){
  	var jsonResult = {
  		code: stt,
  		msg: msg,
  		data: res,
  	};
  	return jsonResult;
  }

//

// thuc hien login
app.post('/login',function(req,res){
  // console.log(req.body);
  // res.json(req.body, 200);
  // // ten ham login ben Manager
  Manager.login(req.body, function(err, resDocument){
    if(err){
      var jsonResult = createJsonResult(1,err,null);
        res.json(jsonResult,200);
    }else {
      var jsonResult = createJsonResult(0,null,resDocument);
      	res.json(jsonResult,200);
    }

  		});

});

// // thuc hien insert
// app.post('/createnewuser',function(req,res){
//     // if(err){
//     //     res.json("data":err,200);
//     // }else {
//     //   	res.json(resDocument,200);
//     // }
//     Manager.CreateNewUser(req.body,function(err,resdocument){
//       var resurl ;
//       if(err){
//         res.json(resurl,200);
//         resurl=createJsonResult(1,err,null);
//           //res.json({"data":err},200);
//
//       }else {
// resurl=createJsonResult(0,null,resdocument);
//         res.json(resurl,200);
//           // res.json({"data":"thanh cong="},200);
//       }
//     });
//
// });


// app.post("/getUserByUserId",funtion(req,res){
//       Manager.getUserByUserId(res.body,function(err,resdocument){
//           if(err){
//             // req.json(
//           }

//       });
//
// });

// app.get('/hello',function(reg,res)){
//     res.json('xin chao moi nguoi',200);
// });

// app.get('/hello', function(req, res){
//
// 		res.json('hello', 200);
//
// 		Manager.getData(req.body, function(err, resDocument){
// 			res.json(resDocument,200);
// 		});
// 	});
//
	// app.get("/demo",function(req,res){
	// 		res.json("dssasas",200);
	// });



}
 // nơi thuc hien trả json về
// // module.ex
//  module.get('/kiem tra',function(reg,res  ){
//
// 	 res.json('thuc hien tra ve thanh cong',200);
//  });
