const mongo = require('mongodb').MongoClient;

const express = require("express");
const http = require("http");
const port = 5000;
const app = express();
let server = http.createServer(app);
const ioServer = require("socket.io")(server)

mongo.connect('mongodb://MegKaw:123@barelybears-shard-00-00-b1dai.mongodb.net:27017,barelybears-shard-00-01-b1dai.mongodb.net:27017,barelybears-shard-00-02-b1dai.mongodb.net:27017/test?ssl=true&replicaSet=BarelyBears-shard-0&authSource=admin&retryWrites=true'
	, function(err, db) {
		if (err) {
			throw err;
		}

		console.log('MongoDB connected...'); 

		ioServer.on("connection", socket => {
			let tutor_pref = db.collection("Tutor Preferences");

			sendStatus = function(s) {
				socket.emit('status', s);
			}

			tutor_pref.find().limit(100).sort({_id:1}).toArray(function(err, res){
				if (err) {
					throw err;
				}

				socket.emit('output', res);

			});

			socket.on('input', function(data)) {
				let subject = data.subject;
				let course = data.course;
				let class = data.class;
				let rate = data.rate;

				tutor_pref.insert({subject:subject, course:course, class:class, rate:rate}, function() {
					ioServer.emit('output', [data]);
				}

				// sendStatus({
				// 	message: "Message sent",
				// 	clear: true
				// })
			}

			// socket.on('clear', function(data)) {
			// 	tutor_pref.remove({}, function(){
			// 		socket.emit('cleared');
			// 	})
			// }

		})
	})

// socket.on("teach", (preferences) => {
// 	mongoose.model("Preference", preferences);
// 	console.log("Success");
// });

// socket.on("learn", console.log("learn"));

// socket.on("error", err => {
// 	console.log("received error from client:", socket.id);
// 	console.log(err);
// })

// socket.emit("event", 50);

// console.log("user connected");

server.listen(port, function(err) {
	if (err) throw err;
	console.log('listiening on port' + port);
});
