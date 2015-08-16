var options = {
  // ** REQUIRED **
  access_token:  'aV1SI82xvTrQD9dI92wxOd4a72y0UpTSK8Bbjf0Tmx1C7LrLTyKlETfSyWCqpUSrKMOqX0Y-lWCFw6yPEhcRiFECdgRlo_GULMgGZS0EumxrKbZFiOmnmAPChBPDZ5JP'  // Access token for specific user,
}

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





  }
}

up.workouts.get({}, callback)     