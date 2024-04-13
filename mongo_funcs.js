const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url =
	"mongodb+srv://proj_connection:k9kuhmTtqOqmHxyX@userinfo.8w3ayxa.mongodb.net/?retryWrites=true&w=majority&appName=UserInfo";

const client = new MongoClient(url);
// Database Name
const dbName = "volunteer_postings";

async function getPosts() {

	// Use connect method to connect to the server
	await client.connect();
	console.log("Connected successfully to server");
	const db = client.db(dbName);
	const collection = db.collection("postings");

	// the following code examples can be pasted here...
	const results = await collection.find({}).toArray();
	//console.log(" documents =>", results);
	//console.log("end getPosts() out")

	return results;
}

async function sendPosts(){
	const results = getPosts()
	.then((posts) => {return posts})
	.catch(console.error)
	.finally(() => client.close());
	
	return results;
}



module.exports = {
	sendPosts
}