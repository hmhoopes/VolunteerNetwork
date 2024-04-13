//uses require to obtain createServer function from http module
const {createServer, get} = require("http");
var url = require('url');
var fs = require('fs');
var path = require('path');

createServer((req, res) => {
	try{
		if(req.headers.mongoreq == "true"){
			handle_mongo(req,res);
		}
		else{
			send_page(req, res);
		}
	}
	catch(err){
		console.log(err);
		res.writeHead(404, {'Content-Type': 'text/plain'});
		return res.end("404 Not Found");
	}
	//sets server to listen/be active on port 8000
}).listen(8000);

var mongo_funcs = require("./mongo_funcs.js");
//function for handling mongo requests
function handle_mongo(req, res){
	let method = req.headers.mongomethod;

	if (method == 'search'){
		pass;
	}
	else if (method == 'makelisting'){
		pass;
	}
	get_post(req, res);
}

async function get_post(req, res){
	posts = await mongo_funcs.sendPosts()
	console.log(posts);
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(JSON.stringify(posts));
	return res.end();
	
}

//function for handling webpage/css/js requests
function send_page(req, res){
	var q = url.parse(req.url, true);
	var filename = "." + q.pathname;
	let type = "";
	if (path.extname(filename) == ".html"){
		type = 'text/html';
	}
	else if (path.extname(filename) == ".css"){
		type = 'text/css';
	}
	else{
		type = 'text/javaScript'
	}

	//reads html/js file and sends it to response
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': type});
			return res.end("404 Not Found");
		} 
		res.writeHead(200, {'Content-Type': type});
		res.write(data);
		return res.end();
	});
}