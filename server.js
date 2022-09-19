var express		=require('express');
var app			=express();
var port        =process.env.PORT || 8080;
var morgan      =require('morgan');
var mongoose	=require('mongoose');
var User		=require('./app/models/user');

app.use(morgan('dev'));


mongoose.connect('mongodb://localhost:27017/tutorial',function(err){
	if(err){
		console.log('not connected' + err)
	}
	else{
		console.log('connected');
	}
});
app.listen(port,function(){
	console.log('runing server' + port);
});