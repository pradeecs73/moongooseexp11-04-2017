var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var profileSchema=new Schema({

name:{
	type: String,
	required: true
},
email:{
	type: String,
	required: true
},
username:{
	type: String,
	required: true
},
password:{
	type: String,
	required: true
}

});

mongoose.model('profile',profileSchema)
