var app = require('express').createServer();

app.get('/', function(req, res){
	res.send('hello world');
});


app.configure(function(){
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(app.router);
});

/*
app.configure('development', function(){
	app.use(express.static(__dirname + '/public'));
	app.use(express.errorHandler({dumpException:true, showStack:true}));
});

app.configure('production', function(){
	var oneYear = 31557600000;
	app.use(express.static(__dirname + '/public', {maxAge:oneYear}));
	app.use(express.errorHandler());
});
*/
app.listen(3000);
