require('../public/js/model/profile.js');
require('./databaseoperations');
var mongoose = require('mongoose');
var Profilemodel = mongoose.model('profile');



     var nodemailer = require("nodemailer");
   
       // Create a SMTP transport object
      var transport = nodemailer.createTransport("SMTP", {
        service: 'Gmail',
        auth: {
            user: "mahaboob.lotus@gmail.com",
            pass: "khussain9"
        }
    });


	//var mongo = require('mongodb');
	
	

    //user signup
	exports.signup = function(req, res) {

		var wine=req.body;
		var email=req.body.email;

       /* var delay=1000;

        setTimeout(function(){

		db.collection('profile', function(err, collection) {
		collection.find({email:email}).toArray(function(err, items) {
		if(items.length > 0)
		{
		res.send({status:"0"});
		}
		else
		{

		db.collection('profile', function(err, collection) {
		collection.insert(wine, {safe:true}, function(err, result) {
		if (err) {
		callback({'error':'An error has occurred'});
		} 
	    else 
	     {
		console.log('Success: ' + JSON.stringify(result[0]));
		 res.send({status:"1"});
		 }		    
	    });	
	  });	
	 }
    });	
  });
},delay);*/

Profilemodel.find({email:email}, 
	    function(err,items){

	       if(err)	
	       {
	       	 res.send(err);
	       }
	       else
	       {
		    	if(items.length > 0){
		    		res.send({status:"0"});
		    	}
		    	else
		    	{
		    		
		    		var newuser = new Profilemodel(req.body);
					    newuser.save(function (err, result) {
					    	if(err)
					    	{
					          console.log(err);
					          res.send(err);
					    	}
					    	else
					    	{
					           console.log(result);
					           res.send(200);
					    	}
					        
					    }); 
		    	}
	      }
	    });




}

   //user signin
	exports.signin = function(req, res) {
         console.log(req.body);
		var email=req.body.email;
		var password=req.body.password;

		/*db.collection('profile', function(err, collection) {
		collection.find({email:email,password:password}).toArray(function(err, items) {
		 res.send({result:items.length,sessionname:items});
	      });
	    });*/
 

	    Profilemodel.find({email:email,password:password}, 
	    function(err,items){
	    	if(err){
	    		console.log(err);
	    		res.send(err)
	    	}
	    	else
	    	{
	    		
	    		res.send({result:items.length,sessionname:items});
	    	}
	    });

	  }

  
	   //Forgot password
    exports.forgotpassword = function(req, res) {

      var forgotpasswordemail=req.body.forgotpasswordemail;
      var newpassword=req.body.newpassword;

     db.collection('profile', function(err, collection) {
        collection.find({email:forgotpasswordemail}).toArray(function(err, items) {
            if(items.length == 0)
              {            
                 res.send({status:"0"});
              }
             else
              {

           db.collection('profile', function(err, collection) {			  
           collection.update({email:forgotpasswordemail},{$set:{password:newpassword}},{ upsert: false },function(err, result) {	
		   if (err) {
		     res.sendStatus(400);
		    } 	
	    
	       });
	     });

                var mailOptions = {
		        from:"nodsem<ess@srsconsultinginc.com>",
		        to:forgotpasswordemail, 
		        subject: "new password", 
		        html: "<b>Your password is reseted your new password is "+newpassword+"</b>" // html body    
                 }  
	
		          transport.sendMail(mailOptions, function(error){
		          if(error){
		             console.log('Error occured');
		             console.log(error.message);
		            return;
		           }
		             console.log('Message sent successfully!');

		          });


                 res.send({status:"1"}); 
              }
	  		    
	    });	
	  });

    }

 exports.changepassword = function(req, res) {

     var email=req.body.useremail;
     var password=req.body.userpassword;    



     Profilemodel.findOne({email:email}, 
	    function(err,item){
	    	if(err){
	    		console.log(err);
	    		res.send(err)
	    	}
	    	else
	    	{
	    		item.password=password;
	    		item.save(function (err, result) {
			      if(err)
			    	{
			          console.log(err);
			          res.send(err);
			    	}
			    	else
			    	{
			           res.send(200);
			    	}
		        
		       }); 
	    		
	    	}
	    });

     /*  db.collection('profile', function(err, collection) {			  
           collection.update({email:email},{$set:{password:password}},{ upsert: false },function(err, result) {	
		   if (err) {
		     res.sendStatus(400);
		    } 
		    else
		    {
               res.sendStatus(200);   
		    }	
	    
	       });
	     });*/
 }

exports.getallRecords = function(req, res) {
 
	    Profilemodel.find({}, 
	    function(err,items){
	    	if(err){
	    		console.log(err);
	    		res.send(err)
	    	}
	    	else
	    	{
	    		res.send(items);
	    	}
	    });

	  }
    
	

 
