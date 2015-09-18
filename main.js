var options = {
  // ** REQUIRED **
  // add Access token for specific user,
}
var express = require('express')
var io = require('socket.io').listen(8000);
var fs = require('fs');
var sys = require('sys');
var app = express();
    app.set("view options", {layout: false});
    app.use(express.static(__dirname + '/views'));

	app.set('port', (process.env.PORT || 5000));
var up = require('jawbone-up')(options);
//Calories burned = 5 x 68.2 kg x .5 hour = 170.5
			//    ^^^^ //
			//    METS //

function callback(err, body) {
  if(err) {
    console.log('Error: ' + err);
  }
  else {
    var data = JSON.parse(body).data;
    // do something with data

    console.log(data.items[0].title)
    console.log("Distance travelled in KM:" + " " + data.items[0].details.km)
    console.log("Time to cover distance:" + " " + data.items[0].details.time + " " +"Seconds")
    time = data.items[0].details.time* 0.000277777777778
    calories_riding = 4*68.2*time
    console.log("Calories burnt riding:"+ calories_riding)
    calories_driving = 2*68.2*time
    console.log("Calories burnt if driving:"+ calories_driving)
		io.sockets.on('connection', function (socket) {
		  socket.emit('for_client', { Title: data.items[0].title, Distance: data.items[0].details.km, Calories: calories_riding.toFixed(2), Time: time.toFixed(2)});
		  socket.on('for_server', function(data) {
	  	
	  });
	});
  }
}

function calculator(calories){

	//Running
	console.log(((calories/69)*262.5)/60 + " " +'minutes')
	time = ((calories/69)*262.5)/60 
	console.log(time/4.375 + " " + "km")

	//Motor Cycle
	console.log(((calories/170)*3600)/60 + " " +'minutes')
	time = ((calories/170)*3600)/60 
	console.log(time/4.375 + " " + "km")

	return time

}



up.workouts.get({}, callback)    
app.get('/', function(req, res){
    res.render('/views/index.html', {title:'Hello'});
});
app.get('/#about', function(req, res){
    res.render('/views/about.html');
});
app.get('/data', function(req, res){
    res.send('Hello');  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});



// calculator(1000) 
